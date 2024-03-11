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
  InputsListByStreamingJobOptionalParams,
  StreamAnalyticsManagementClient,
} from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all of the inputs under the specified streaming job.
 *
 * @summary Lists all of the inputs under the specified streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Input_ListByStreamingJob.json
 */
async function listAllInputsInAStreamingJob() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg8440";
  const jobName = "sj9597";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const resArray = new Array();
  for await (let item of client.inputs.listByStreamingJob(
    resourceGroupName,
    jobName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists all of the inputs under the specified streaming job.
 *
 * @summary Lists all of the inputs under the specified streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Input_ListByStreamingJob_Diagnostics.json
 */
async function listAllInputsInAStreamingJobAndIncludeDiagnosticInformationUsingTheSelectODataQueryParameter() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const select = "*";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg3276";
  const jobName = "sj7804";
  const options: InputsListByStreamingJobOptionalParams = { select };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const resArray = new Array();
  for await (let item of client.inputs.listByStreamingJob(
    resourceGroupName,
    jobName,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAllInputsInAStreamingJob();
  listAllInputsInAStreamingJobAndIncludeDiagnosticInformationUsingTheSelectODataQueryParameter();
}

main().catch(console.error);
