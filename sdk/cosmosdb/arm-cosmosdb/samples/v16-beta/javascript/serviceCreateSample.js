/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a service.
 *
 * @summary Creates a service.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBDataTransferServiceCreate.json
 */
async function dataTransferServiceCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const serviceName = "DataTransfer";
  const createUpdateParameters = {
    instanceCount: 1,
    instanceSize: "Cosmos.D4s",
    serviceType: "DataTransfer",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginCreateAndWait(
    resourceGroupName,
    accountName,
    serviceName,
    createUpdateParameters
  );
  console.log(result);
}

dataTransferServiceCreate().catch(console.error);

/**
 * This sample demonstrates how to Creates a service.
 *
 * @summary Creates a service.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBGraphAPIComputeServiceCreate.json
 */
async function graphApiComputeServiceCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const serviceName = "GraphAPICompute";
  const createUpdateParameters = {
    instanceCount: 1,
    instanceSize: "Cosmos.D4s",
    serviceType: "GraphAPICompute",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginCreateAndWait(
    resourceGroupName,
    accountName,
    serviceName,
    createUpdateParameters
  );
  console.log(result);
}

graphApiComputeServiceCreate().catch(console.error);

/**
 * This sample demonstrates how to Creates a service.
 *
 * @summary Creates a service.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBMaterializedViewsBuilderServiceCreate.json
 */
async function materializedViewsBuilderServiceCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const serviceName = "MaterializedViewsBuilder";
  const createUpdateParameters = {
    instanceCount: 1,
    instanceSize: "Cosmos.D4s",
    serviceType: "MaterializedViewsBuilder",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginCreateAndWait(
    resourceGroupName,
    accountName,
    serviceName,
    createUpdateParameters
  );
  console.log(result);
}

materializedViewsBuilderServiceCreate().catch(console.error);

/**
 * This sample demonstrates how to Creates a service.
 *
 * @summary Creates a service.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBSqlDedicatedGatewayServiceCreate.json
 */
async function sqlDedicatedGatewayServiceCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const serviceName = "SqlDedicatedGateway";
  const createUpdateParameters = {
    instanceCount: 1,
    instanceSize: "Cosmos.D4s",
    serviceType: "SqlDedicatedGateway",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginCreateAndWait(
    resourceGroupName,
    accountName,
    serviceName,
    createUpdateParameters
  );
  console.log(result);
}

sqlDedicatedGatewayServiceCreate().catch(console.error);
