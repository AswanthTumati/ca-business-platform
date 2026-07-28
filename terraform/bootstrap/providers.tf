provider "aws" {

  region = var.aws_region

  default_tags {

    tags = {

      Project     = "ca-business-platform"
      Environment = "shared"
      ManagedBy   = "terraform"

    }

  }
}