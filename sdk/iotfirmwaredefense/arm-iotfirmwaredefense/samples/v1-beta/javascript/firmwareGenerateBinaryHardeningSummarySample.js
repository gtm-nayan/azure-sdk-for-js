/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { IoTFirmwareDefenseClient } = require("@azure/arm-iotfirmwaredefense");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to The operation to list the binary hardening summary percentages for a firmware.
 *
 * @summary The operation to list the binary hardening summary percentages for a firmware.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/preview/2023-02-08-preview/examples/Firmware_GenerateBinaryHardeningSummary_MaximumSet_Gen.json
 */
async function firmwareGenerateBinaryHardeningSummaryMaximumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] || "685C0C6F-9867-4B1C-A534-AA3A05B54BCE";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "rgworkspaces-firmwares";
  const workspaceName = "A7";
  const firmwareId = "umrkdttp";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.firmwareOperations.generateBinaryHardeningSummary(
    resourceGroupName,
    workspaceName,
    firmwareId,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to list the binary hardening summary percentages for a firmware.
 *
 * @summary The operation to list the binary hardening summary percentages for a firmware.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/preview/2023-02-08-preview/examples/Firmware_GenerateBinaryHardeningSummary_MinimumSet_Gen.json
 */
async function firmwareGenerateBinaryHardeningSummaryMinimumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] || "685C0C6F-9867-4B1C-A534-AA3A05B54BCE";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "rgworkspaces-firmwares";
  const workspaceName = "A7";
  const firmwareId = "umrkdttp";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.firmwareOperations.generateBinaryHardeningSummary(
    resourceGroupName,
    workspaceName,
    firmwareId,
  );
  console.log(result);
}

async function main() {
  firmwareGenerateBinaryHardeningSummaryMaximumSetGen();
  firmwareGenerateBinaryHardeningSummaryMinimumSetGen();
}

main().catch(console.error);
