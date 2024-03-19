/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SiteRecoveryManagementClient } = require("@azure/arm-recoveryservices-siterecovery");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to The operation to update appliance of an ASR replication protected item.
 *
 * @summary The operation to update appliance of an ASR replication protected item.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-08-01/examples/ReplicationProtectedItems_UpdateAppliance.json
 */
async function updatesApplianceForReplicationProtectedItem() {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "7c943c1b-5122-4097-90c8-861411bdd574";
  const resourceName = "Ayan-0106-SA-Vault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] || "Ayan-0106-SA-RG";
  const fabricName = "Ayan-0106-SA-Vaultreplicationfabric";
  const protectionContainerName = "Ayan-0106-SA-Vaultreplicationcontainer";
  const replicatedProtectedItemName = "idclab-vcen67_50158124-8857-3e08-0893-2ddf8ebb8c1f";
  const applianceUpdateInput = {
    properties: {
      providerSpecificDetails: {
        instanceType: "InMageRcm",
        runAsAccountId: "",
      },
      targetApplianceId: "",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationProtectedItems.beginUpdateApplianceAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    protectionContainerName,
    replicatedProtectedItemName,
    applianceUpdateInput,
  );
  console.log(result);
}

async function main() {
  updatesApplianceForReplicationProtectedItem();
}

main().catch(console.error);
