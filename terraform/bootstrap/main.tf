############################################################
# Terraform State S3 Bucket
############################################################
resource "aws_s3_bucket" "terraform_state" {

  bucket = var.state_bucket_name

  lifecycle {

    prevent_destroy = true

  }

}


############################################################
# S3 Bucket Ownership
############################################################

resource "aws_s3_bucket_ownership_controls" "terraform_state" {

  bucket = aws_s3_bucket.terraform_state.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}



############################################################
# Block Public Access
############################################################

resource "aws_s3_bucket_public_access_block" "terraform_state" {

  bucket = aws_s3_bucket.terraform_state.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}



############################################################
# Bucket Versioning
############################################################

resource "aws_s3_bucket_versioning" "terraform_state" {

  bucket = aws_s3_bucket.terraform_state.id

  versioning_configuration {

    status = "Enabled"

  }

}



############################################################
# Server-Side Encryption
############################################################

resource "aws_s3_bucket_server_side_encryption_configuration" "terraform_state" {

  bucket = aws_s3_bucket.terraform_state.id

  rule {

    apply_server_side_encryption_by_default {

      sse_algorithm = "AES256"

    }

    bucket_key_enabled = true

  }

}


