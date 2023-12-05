/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  OrganizationResource,
  OrganizationCreateOptionalParams,
  ConfluentManagementClient
} from "@azure/arm-confluent";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create Organization resource
 *
 * @summary Create Organization resource
 * x-ms-original-file: specification/confluent/resource-manager/Microsoft.Confluent/stable/2023-08-22/examples/Organization_Create.json
 */
async function organizationCreate() {
  const subscriptionId =
    process.env["CONFLUENT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONFLUENT_RESOURCE_GROUP"] || "myResourceGroup";
  const organizationName = "myOrganization";
  const body: OrganizationResource = {
    linkOrganization: { token: "string" },
    location: "West US",
    offerDetail: {
      id: "string",
      planId: "string",
      planName: "string",
      privateOfferId: "string",
      privateOfferIds: ["string"],
      publisherId: "string",
      termUnit: "string"
    },
    tags: { environment: "Dev" },
    userDetail: {
      aadEmail: "contoso@microsoft.com",
      emailAddress: "contoso@microsoft.com",
      firstName: "string",
      lastName: "string",
      userPrincipalName: "contoso@microsoft.com"
    }
  };
  const options: OrganizationCreateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new ConfluentManagementClient(credential, subscriptionId);
  const result = await client.organization.beginCreateAndWait(
    resourceGroupName,
    organizationName,
    options
  );
  console.log(result);
}

async function main() {
  organizationCreate();
}

main().catch(console.error);
