/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SpringAppDiscoveryManagementClient } = require("@azure/arm-springappdiscovery");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List springbootsites resource by subscription
 *
 * @summary List springbootsites resource by subscription
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootsites_ListBySubscription_MaximumSet_Gen.json
 */
async function springbootsitesListBySubscriptionMaximumSetGen() {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] || "chshxczdscjpcyvyethat";
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.springbootsites.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List springbootsites resource by subscription
 *
 * @summary List springbootsites resource by subscription
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootsites_ListBySubscription_MinimumSet_Gen.json
 */
async function springbootsitesListBySubscriptionMinimumSetGen() {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] || "chshxczdscjpcyvyethat";
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.springbootsites.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  springbootsitesListBySubscriptionMaximumSetGen();
  springbootsitesListBySubscriptionMinimumSetGen();
}

main().catch(console.error);
