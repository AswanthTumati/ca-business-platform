terraform {

  backend "s3" {

    bucket       = "ca-business-platform-terraform-v1-355628740049"
    key          = "ca-business-platform/dev/terraform.tfstate"
    region       = "ap-south-1"
    encrypt      = true
    use_lockfile = true

  }

}