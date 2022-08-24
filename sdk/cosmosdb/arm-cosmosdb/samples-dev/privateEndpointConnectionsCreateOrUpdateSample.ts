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
  PrivateEndpointConnection,
  CosmosDBManagementClient
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Approve or reject a private endpoint connection with a given name.
 *
 * @summary Approve or reject a private endpoint connection with a given name.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBPrivateEndpointConnectionUpdate.json
 */
async function approveOrRejectAPrivateEndpointConnectionWithAGivenName() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const privateEndpointConnectionName = "privateEndpointConnectionName";
  const parameters: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "Approved by johndoe@contoso.com",
      status: "Approved"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.beginCreateOrUpdateAndWait(
    resourceGroupName,
    accountName,
    privateEndpointConnectionName,
    parameters
  );
  console.log(result);
}

approveOrRejectAPrivateEndpointConnectionWithAGivenName().catch(console.error);
