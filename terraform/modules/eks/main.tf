
# IAM role for the EKS cluster

data "aws_iam_policy_document" "eks_cluster_assume_role" {
  statement {
    effect = "Allow"

    principals {
      type = "Service"

      identifiers = [
        "eks.amazonaws.com"
      ]
    }

    actions = [
      "sts:AssumeRole"
    ]
  }
}


resource "aws_iam_role" "eks_cluster" {
  name = "${var.project_name}-${var.environment}-eks-cluster-role"

  assume_role_policy = data.aws_iam_policy_document.eks_cluster_assume_role.json

  tags = {
    Name = "${var.project_name}-${var.environment}-eks-cluster-role"
  }
}


resource "aws_iam_role_policy_attachment" "eks_cluster_policy" {
  role = aws_iam_role.eks_cluster.name

  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
}



resource "aws_eks_cluster" "main" {
  name = var.cluster_name

  role_arn = aws_iam_role.eks_cluster.arn

  version = var.cluster_version

  vpc_config {
    subnet_ids = var.subnet_ids

    endpoint_public_access  = var.endpoint_public_access
    endpoint_private_access = var.endpoint_private_access
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy
  ]

  tags = {
    Name = var.cluster_name
  }
}


# IAM role for the EKS node group

data "aws_iam_policy_document" "eks_node_assume_role" {
  statement {
    effect = "Allow"

    principals {
      type = "Service"

      identifiers = [
        "ec2.amazonaws.com"
      ]
    }

    actions = [
      "sts:AssumeRole"
    ]
  }
}

resource "aws_iam_role" "eks_node" {
  name = "${var.project_name}-${var.environment}-eks-node-role"

  assume_role_policy = data.aws_iam_policy_document.eks_node_assume_role.json

  tags = {
    Name = "${var.project_name}-${var.environment}-eks-node-role"
  }
}


resource "aws_iam_role_policy_attachment" "eks_worker_node_policy" {
  role = aws_iam_role.eks_node.name

  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
}

resource "aws_iam_role_policy_attachment" "eks_ecr_read_only" {
  role = aws_iam_role.eks_node.name

  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryPullOnly"
}

/*
# EKS CNI Policy Attachment
resource "aws_iam_role_policy_attachment" "eks_cni_policy" {
  role = aws_iam_role.eks_node.name

  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
}*/


# EKS Node Group
resource "aws_eks_node_group" "main" {
  cluster_name = aws_eks_cluster.main.name

  node_group_name = "${var.project_name}-${var.environment}-node-group"

  node_role_arn = aws_iam_role.eks_node.arn

  subnet_ids = var.node_subnet_ids

  instance_types = var.node_instance_types

  capacity_type = var.node_capacity_type

  disk_size = var.node_disk_size

  scaling_config {
    desired_size = var.node_desired_size
    min_size     = var.node_min_size
    max_size     = var.node_max_size
  }

  update_config {
    max_unavailable = 1
  }

  labels = {
    environment = var.environment
    workload    = "general"
  }


    depends_on = [
    aws_iam_role_policy_attachment.eks_worker_node_policy,
    aws_iam_role_policy_attachment.eks_ecr_read_only,
   # aws_iam_role_policy_attachment.eks_cni_policy
]
  tags = {
    Name = "${var.project_name}-${var.environment}-node-group"
  }
}



# IAM role for the EKS pod identity
data "aws_iam_policy_document" "pod_identity_assume_role" {
  statement {
    effect = "Allow"

    principals {
      type = "Service"

      identifiers = [
        "pods.eks.amazonaws.com"
      ]
    }

    actions = [
      "sts:AssumeRole",
      "sts:TagSession"
    ]
  }
}



# IAM role for the VPC CNI
resource "aws_iam_role" "vpc_cni" {
  name = "${var.project_name}-${var.environment}-vpc-cni-role"

  assume_role_policy = data.aws_iam_policy_document.pod_identity_assume_role.json

  tags = {
    Name = "${var.project_name}-${var.environment}-vpc-cni-role"
  }
}


# Attach the AmazonEKS_CNI_Policy to the VPC CNI role
resource "aws_iam_role_policy_attachment" "vpc_cni_policy" {
  role = aws_iam_role.vpc_cni.name

  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
}





## EKS Addon for the VPC CNI
resource "aws_eks_addon" "pod_identity_agent" {
  cluster_name = aws_eks_cluster.main.name
  addon_name   = "eks-pod-identity-agent"

  depends_on = [
    aws_eks_node_group.main
  ]

  tags = {
    Name = "${var.project_name}-${var.environment}-pod-identity-agent"
  }
}




# EKS Addon for the VPC CNI - converting self-managed VPC CNI to EKS managed VPC CNI
resource "aws_eks_addon" "vpc_cni" {
  cluster_name = aws_eks_cluster.main.name
  addon_name   = "vpc-cni"

  resolve_conflicts_on_create = "OVERWRITE"

  pod_identity_association {
    role_arn        = aws_iam_role.vpc_cni.arn
    service_account = "aws-node"
  }

  depends_on = [
    aws_eks_addon.pod_identity_agent,
    aws_iam_role_policy_attachment.vpc_cni_policy
  ]

  tags = {
    Name = "${var.project_name}-${var.environment}-vpc-cni"
  }
}


# EKS Addon for CoreDNS converting self-managed coreDNS to EKS managed CoreDNS
resource "aws_eks_addon" "coredns" {
  cluster_name = aws_eks_cluster.main.name
  addon_name   = "coredns"

  resolve_conflicts_on_create = "OVERWRITE"

  depends_on = [
    aws_eks_node_group.main
  ]

  tags = {
    Name = "${var.project_name}-${var.environment}-coredns"
  }
}



# EKS Addon for kube-proxy converting self-managed kube-proxy to EKS managed kube-proxy

resource "aws_eks_addon" "kube_proxy" {
  cluster_name = aws_eks_cluster.main.name
  addon_name   = "kube-proxy"

  resolve_conflicts_on_create = "OVERWRITE"

  depends_on = [
    aws_eks_node_group.main
  ]

  tags = {
    Name = "${var.project_name}-${var.environment}-kube-proxy"
  }
}




## IAM role for the EBS CSI driver
resource "aws_iam_role" "ebs_csi" {
  name = "${var.project_name}-${var.environment}-ebs-csi-role"

  assume_role_policy = data.aws_iam_policy_document.pod_identity_assume_role.json

  tags = {
    Name = "${var.project_name}-${var.environment}-ebs-csi-role"
  }
}


## Attach the AmazonEBSCSIDriverPolicyV2 to the EBS CSI role
resource "aws_iam_role_policy_attachment" "ebs_csi_policy" {
  role = aws_iam_role.ebs_csi.name

  policy_arn = "arn:aws:iam::aws:policy/AmazonEBSCSIDriverPolicyV2"
}

## EKS Addon for the EBS CSI driverS
resource "aws_eks_addon" "ebs_csi" {
  cluster_name = aws_eks_cluster.main.name
  addon_name   = "aws-ebs-csi-driver"

  pod_identity_association {
    role_arn        = aws_iam_role.ebs_csi.arn
    service_account = "ebs-csi-controller-sa"
  }

  depends_on = [
    aws_eks_addon.pod_identity_agent,
    aws_iam_role_policy_attachment.ebs_csi_policy
  ]

  tags = {
    Name = "${var.project_name}-${var.environment}-ebs-csi"
  }
}