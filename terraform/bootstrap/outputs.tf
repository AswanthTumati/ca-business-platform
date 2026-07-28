output "state_bucket_name" {

  description = "S3 bucket used for Terraform remote state"

  value = aws_s3_bucket.terraform_state.id

}


output "state_bucket_arn" {

  description = "ARN of the Terraform state S3 bucket"

  value = aws_s3_bucket.terraform_state.arn

}