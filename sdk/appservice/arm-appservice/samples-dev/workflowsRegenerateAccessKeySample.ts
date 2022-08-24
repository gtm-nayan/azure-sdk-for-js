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
  RegenerateActionParameter,
  WebSiteManagementClient
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Regenerates the callback URL access key for request triggers.
 *
 * @summary Regenerates the callback URL access key for request triggers.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/Workflows_RegenerateAccessKey.json
 */
async function regenerateTheCallbackUrlAccessKeyForRequestTriggers() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testResourceGroup";
  const name = "test-name";
  const workflowName = "testWorkflowName";
  const keyType: RegenerateActionParameter = { keyType: "Primary" };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.workflows.regenerateAccessKey(
    resourceGroupName,
    name,
    workflowName,
    keyType
  );
  console.log(result);
}

regenerateTheCallbackUrlAccessKeyForRequestTriggers().catch(console.error);
