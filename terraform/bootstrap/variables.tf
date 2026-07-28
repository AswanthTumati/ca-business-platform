variable "aws_region" {

  description = "AWS region used for Terraform state infrastructure"

  type = string

  default = "ap-south-1"

}


variable "state_bucket_name" {

  description = "Globally unique S3 bucket name for Terraform remote state"

  type = string

}