variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "cluster_name" {
  description = "Name of the EKS cluster"
  type        = string
}

variable "cluster_version" {
  description = "Kubernetes version for the EKS cluster"
  type        = string
}

variable "subnet_ids" {
  description = "Subnet IDs used by the EKS control plane"
  type        = list(string)
}

variable "endpoint_public_access" {
  description = "Enable public access to the Kubernetes API endpoint"
  type        = bool
  default     = true
}

variable "endpoint_private_access" {
  description = "Enable private access to the Kubernetes API endpoint"
  type        = bool
  default     = true
}




# node-group variables

variable "node_instance_types" {
  description = "EC2 instance types used by the EKS managed node group"
  type        = list(string)
}

variable "node_capacity_type" {
  description = "Capacity type for the EKS managed node group"
  type        = string
  default     = "ON_DEMAND"
}

variable "node_disk_size" {
  description = "Disk size in GiB for EKS worker nodes"
  type        = number
  default     = 20
}

variable "node_desired_size" {
  description = "Desired number of worker nodes"
  type        = number
}

variable "node_min_size" {
  description = "Minimum number of worker nodes"
  type        = number
}

variable "node_max_size" {
  description = "Maximum number of worker nodes"
  type        = number
}

variable "node_subnet_ids" {
  description = "Subnet IDs where EKS worker nodes are created"
  type        = list(string)
}


variable "aws_region" {
  type = string
}

variable "vpc_id" {
  type = string
}