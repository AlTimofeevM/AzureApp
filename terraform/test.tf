provider "azurerm" {
}

resource "azurerm_resource_group" "RocketResourceGroup" {
        name = "RocketResourceGroup"
        location = "West Europe"
}