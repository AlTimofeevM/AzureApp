provider "azurerm" {
    subscription_id = "ad6fe0fd-4790-4699-9dc6-1d1f193f680b"
    client_id       = "52cd243f-efd1-4da1-a4ea-08c669c542ad"
    client_secret   = "4458fce5-3dc7-4f5f-8b37-caada64a1e92"
    tenant_id       = "f8b99eb2-b3f3-468f-b3ae-93ade0f71db3"
}

resource "azurerm_resource_group" "myterraformgroup" {
    name     = "myResourceGroup"
    location = "eastus"

    tags = {
        environment = "Terraform Demo"
    }
}