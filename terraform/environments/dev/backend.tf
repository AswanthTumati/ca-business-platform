terraform {

  backend "s3" {

    bucket       = "ca-business-platform-terraform-v1"
    key          = "ca-business-platform/dev/terraform.tfstate"
    region       = "ap-south-1"
    encrypt      = true
    use_lockfile = true

  }

}