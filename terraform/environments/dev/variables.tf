variable "aws_region" {
  description = "AWS region"
  type        = string
}

variable "project_name" {
  description = "Project name"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "vpc_cidr" {
  description = "VPC CIDR block"
  type        = string
}

variable "availability_zones" {
  description = "Availability Zones"
  type        = list(string)
}

variable "public_subnet_cidrs" {
  description = "Public subnet CIDR blocks"
  type        = list(string)
}

variable "private_subnet_cidrs" {
  description = "Private subnet CIDR blocks"
  type        = list(string)
}



# EKS Cluster Variables

variable "eks_cluster_name" {
  description = "Name of the EKS cluster"
  type        = string
}

variable "eks_cluster_version" {
  description = "Kubernetes version for the EKS cluster"
  type        = string
}



# EKS Worker Node Variables
variable "node_instance_types" {
  description = "EC2 instance types used by EKS worker nodes"
  type        = list(string)
}

variable "node_capacity_type" {
  description = "EKS worker capacity type"
  type        = string
}

variable "node_disk_size" {
  description = "Worker node root disk size"
  type        = number
}

variable "node_desired_size" {
  description = "Desired worker node count"
  type        = number
}

variable "node_min_size" {
  description = "Minimum worker node count"
  type        = number
}

variable "node_max_size" {
  description = "Maximum worker node count"
  type        = number
}