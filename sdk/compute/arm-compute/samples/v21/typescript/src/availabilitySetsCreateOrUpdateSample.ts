/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AvailabilitySet, ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update an availability set.
 *
 * @summary Create or update an availability set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-09-01/examples/availabilitySetExamples/AvailabilitySet_Create.json
 */
async function createAnAvailabilitySet() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const availabilitySetName = "myAvailabilitySet";
  const parameters: AvailabilitySet = {
    location: "westus",
    platformFaultDomainCount: 2,
    platformUpdateDomainCount: 20,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.availabilitySets.createOrUpdate(
    resourceGroupName,
    availabilitySetName,
    parameters,
  );
  console.log(result);
}

async function main() {
  createAnAvailabilitySet();
}

main().catch(console.error);
