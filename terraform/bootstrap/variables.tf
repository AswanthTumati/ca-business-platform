variable "aws_region" {

  description = "AWS region for Terraform bootstrap resources"

  type = string

  default = "ap-south-1"

}


variable "state_bucket_name" {

  description = "S3 bucket used for Terraform remote state"

  type = string

}