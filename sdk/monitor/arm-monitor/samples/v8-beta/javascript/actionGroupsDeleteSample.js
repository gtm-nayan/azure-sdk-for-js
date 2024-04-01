/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete an action group.
 *
 * @summary Delete an action group.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2023-01-01/examples/deleteActionGroup.json
 */
async function deleteAnActionGroup() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "187f412d-1758-44d9-b052-169e2564721d";
  const resourceGroupName = process.env["MONITOR_RESOURCE_GROUP"] || "Default-NotificationRules";
  const actionGroupName = "SampleActionGroup";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.actionGroups.delete(resourceGroupName, actionGroupName);
  console.log(result);
}

async function main() {
  deleteAnActionGroup();
}

main().catch(console.error);
