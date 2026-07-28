aws_region   = "ap-south-1"
project_name = "ca-business-platform"
environment  = "dev"

vpc_cidr = "10.0.0.0/16"

availability_zones = [
  "ap-south-1a",
  "ap-south-1b"
]

public_subnet_cidrs = [
  "10.0.1.0/24",
  "10.0.2.0/24"
]

private_subnet_cidrs = [
  "10.0.11.0/24",
  "10.0.12.0/24"
]


# EKS Cluster Variables

eks_cluster_name    = "ca-business-platform-dev"
eks_cluster_version = "1.35"



# EKS Worker Node Variables

node_instance_types = [
  "m7i-flex.large"
]

node_capacity_type = "ON_DEMAND"

node_disk_size = 20

node_desired_size = 1
node_min_size     = 1
node_max_size     = 2