output "vpc_id" {
  description = "VPC ID"
  value       = module.vpc.vpc_id
}

output "public_subnet_ids" {
  description = "Public subnet IDs"
  value       = module.vpc.public_subnet_ids
}

output "private_subnet_ids" {
  description = "Private subnet IDs"
  value       = module.vpc.private_subnet_ids
}



# EKS Cluster Outputs

output "eks_cluster_name" {
  description = "EKS cluster name"
  value       = module.eks.cluster_name
}

output "eks_cluster_endpoint" {
  description = "EKS Kubernetes API endpoint"
  value       = module.eks.cluster_endpoint
}

output "eks_cluster_security_group_id" {
  description = "EKS cluster security group ID"
  value       = module.eks.cluster_security_group_id
}



# EKS Node Group Outputs
output "eks_node_group_name" {
  description = "EKS managed node group name"
  value       = module.eks.node_group_name
}

output "eks_node_iam_role_arn" {
  description = "EKS worker node IAM role ARN"
  value       = module.eks.node_iam_role_arn
}