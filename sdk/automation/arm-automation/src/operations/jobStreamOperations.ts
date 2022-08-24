/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { JobStreamOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  JobStream,
  JobStreamListByJobNextOptionalParams,
  JobStreamListByJobOptionalParams,
  JobStreamGetOptionalParams,
  JobStreamGetResponse,
  JobStreamListByJobResponse,
  JobStreamListByJobNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing JobStreamOperations operations. */
export class JobStreamOperationsImpl implements JobStreamOperations {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class JobStreamOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of jobs streams identified by job name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The options parameters.
   */
  public listByJob(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    options?: JobStreamListByJobOptionalParams
  ): PagedAsyncIterableIterator<JobStream> {
    const iter = this.listByJobPagingAll(
      resourceGroupName,
      automationAccountName,
      jobName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByJobPagingPage(
          resourceGroupName,
          automationAccountName,
          jobName,
          options
        );
      }
    };
  }

  private async *listByJobPagingPage(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    options?: JobStreamListByJobOptionalParams
  ): AsyncIterableIterator<JobStream[]> {
    let result = await this._listByJob(
      resourceGroupName,
      automationAccountName,
      jobName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByJobNext(
        resourceGroupName,
        automationAccountName,
        jobName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByJobPagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    options?: JobStreamListByJobOptionalParams
  ): AsyncIterableIterator<JobStream> {
    for await (const page of this.listByJobPagingPage(
      resourceGroupName,
      automationAccountName,
      jobName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve the job stream identified by job stream id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param jobStreamId The job stream id.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    jobStreamId: string,
    options?: JobStreamGetOptionalParams
  ): Promise<JobStreamGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        jobName,
        jobStreamId,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Retrieve a list of jobs streams identified by job name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The options parameters.
   */
  private _listByJob(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    options?: JobStreamListByJobOptionalParams
  ): Promise<JobStreamListByJobResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, jobName, options },
      listByJobOperationSpec
    );
  }

  /**
   * ListByJobNext
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param nextLink The nextLink from the previous successful call to the ListByJob method.
   * @param options The options parameters.
   */
  private _listByJobNext(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    nextLink: string,
    options?: JobStreamListByJobNextOptionalParams
  ): Promise<JobStreamListByJobNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, jobName, nextLink, options },
      listByJobNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/streams/{jobStreamId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStream
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobStreamId,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const listByJobOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/streams",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStreamListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const listByJobNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobStreamListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nextLink,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
