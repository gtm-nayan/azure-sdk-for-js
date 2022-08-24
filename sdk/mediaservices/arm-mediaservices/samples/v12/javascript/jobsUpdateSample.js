/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update is only supported for description and priority. Updating Priority will take effect when the Job state is Queued or Scheduled and depending on the timing the priority update may be ignored.
 *
 * @summary Update is only supported for description and priority. Updating Priority will take effect when the Job state is Queued or Scheduled and depending on the timing the priority update may be ignored.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2021-11-01/examples/jobs-update.json
 */
async function updateAJob() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "contosoresources";
  const accountName = "contosomedia";
  const transformName = "exampleTransform";
  const jobName = "job1";
  const parameters = {
    description: "Example job to illustrate update.",
    input: {
      odataType: "#Microsoft.Media.JobInputAsset",
      assetName: "job1-InputAsset",
    },
    outputs: [
      {
        odataType: "#Microsoft.Media.JobOutputAsset",
        assetName: "job1-OutputAsset",
      },
    ],
    priority: "High",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.jobs.update(
    resourceGroupName,
    accountName,
    transformName,
    jobName,
    parameters
  );
  console.log(result);
}

updateAJob().catch(console.error);
