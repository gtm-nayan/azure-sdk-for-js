/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WorkloadNetworkDnsZone, AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create a DNS zone by id in a private cloud workload network.
 *
 * @summary Create a DNS zone by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/WorkloadNetworks_CreateDnsZones.json
 */
async function workloadNetworksCreateDnsZone() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const dnsZoneId = "dnsZone1";
  const workloadNetworkDnsZone: WorkloadNetworkDnsZone = {
    displayName: "dnsZone1",
    dnsServerIps: ["1.1.1.1"],
    domain: [],
    revision: 1,
    sourceIp: "8.8.8.8"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginCreateDnsZoneAndWait(
    resourceGroupName,
    privateCloudName,
    dnsZoneId,
    workloadNetworkDnsZone
  );
  console.log(result);
}

workloadNetworksCreateDnsZone().catch(console.error);
