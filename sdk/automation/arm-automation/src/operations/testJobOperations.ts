/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { TestJobOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  TestJobCreateParameters,
  TestJobCreateOptionalParams,
  TestJobCreateResponse,
  TestJobGetOptionalParams,
  TestJobGetResponse,
  TestJobResumeOptionalParams,
  TestJobStopOptionalParams,
  TestJobSuspendOptionalParams
} from "../models";

/** Class containing TestJobOperations operations. */
export class TestJobOperationsImpl implements TestJobOperations {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class TestJobOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Create a test job of the runbook.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The parameters supplied to the create test job operation.
   * @param parameters The parameters supplied to the create test job operation.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    parameters: TestJobCreateParameters,
    options?: TestJobCreateOptionalParams
  ): Promise<TestJobCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        parameters,
        options
      },
      createOperationSpec
    );
  }

  /**
   * Retrieve the test job for the specified runbook.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: TestJobGetOptionalParams
  ): Promise<TestJobGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, runbookName, options },
      getOperationSpec
    );
  }

  /**
   * Resume the test job.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  resume(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: TestJobResumeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, runbookName, options },
      resumeOperationSpec
    );
  }

  /**
   * Stop the test job.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  stop(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: TestJobStopOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, runbookName, options },
      stopOperationSpec
    );
  }

  /**
   * Suspend the test job.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  suspend(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: TestJobSuspendOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, runbookName, options },
      suspendOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.TestJob
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters36,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TestJob
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const resumeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/resume",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const stopOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/stop",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const suspendOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/suspend",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
