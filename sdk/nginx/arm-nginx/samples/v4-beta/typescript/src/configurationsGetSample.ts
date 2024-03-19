/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NginxManagementClient } from "@azure/arm-nginx";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get the NGINX configuration of given NGINX deployment
 *
 * @summary Get the NGINX configuration of given NGINX deployment
 * x-ms-original-file: specification/nginx/resource-manager/NGINX.NGINXPLUS/preview/2024-01-01-preview/examples/Configurations_Get.json
 */
async function configurationsGet() {
  const subscriptionId =
    process.env["NGINX_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["NGINX_RESOURCE_GROUP"] || "myResourceGroup";
  const deploymentName = "myDeployment";
  const configurationName = "default";
  const credential = new DefaultAzureCredential();
  const client = new NginxManagementClient(credential, subscriptionId);
  const result = await client.configurations.get(
    resourceGroupName,
    deploymentName,
    configurationName,
  );
  console.log(result);
}

async function main() {
  configurationsGet();
}

main().catch(console.error);
