module "vpc" {
  source = "../../modules/vpc"

  project_name = var.project_name
  environment  = var.environment

  vpc_cidr = var.vpc_cidr

  availability_zones = var.availability_zones

  public_subnet_cidrs = var.public_subnet_cidrs

  private_subnet_cidrs = var.private_subnet_cidrs
}




# EKS Cluster & Worker Node Module
module "eks" {
  source = "../../modules/eks"

  project_name = var.project_name
  environment  = var.environment

  cluster_name    = var.eks_cluster_name
  cluster_version = var.eks_cluster_version

  subnet_ids = module.vpc.private_subnet_ids

  endpoint_public_access  = true
  endpoint_private_access = true

  node_subnet_ids = module.vpc.public_subnet_ids

  node_instance_types = var.node_instance_types
  node_capacity_type  = var.node_capacity_type
  node_disk_size      = var.node_disk_size

  node_desired_size = var.node_desired_size
  node_min_size     = var.node_min_size
  node_max_size     = var.node_max_size
}