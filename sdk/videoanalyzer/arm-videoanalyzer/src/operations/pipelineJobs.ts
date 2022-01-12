/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PipelineJobs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { VideoAnalyzerManagementClient } from "../videoAnalyzerManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PipelineJob,
  PipelineJobsListNextOptionalParams,
  PipelineJobsListOptionalParams,
  PipelineJobsListResponse,
  PipelineJobsGetOptionalParams,
  PipelineJobsGetResponse,
  PipelineJobsCreateOrUpdateOptionalParams,
  PipelineJobsCreateOrUpdateResponse,
  PipelineJobsDeleteOptionalParams,
  PipelineJobUpdate,
  PipelineJobsUpdateOptionalParams,
  PipelineJobsUpdateResponse,
  PipelineJobsCancelOptionalParams,
  PipelineJobsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PipelineJobs operations. */
export class PipelineJobsImpl implements PipelineJobs {
  private readonly client: VideoAnalyzerManagementClient;

  /**
   * Initialize a new instance of the class PipelineJobs class.
   * @param client Reference to the service client
   */
  constructor(client: VideoAnalyzerManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves a list of all live pipelines that have been created, along with their JSON
   * representations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: PipelineJobsListOptionalParams
  ): PagedAsyncIterableIterator<PipelineJob> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, accountName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: PipelineJobsListOptionalParams
  ): AsyncIterableIterator<PipelineJob[]> {
    let result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: PipelineJobsListOptionalParams
  ): AsyncIterableIterator<PipelineJob> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves a list of all live pipelines that have been created, along with their JSON
   * representations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: PipelineJobsListOptionalParams
  ): Promise<PipelineJobsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec
    );
  }

  /**
   * Retrieves a specific pipeline job by name. If a pipeline job with that name has been previously
   * created, the call will return the JSON representation of that instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param pipelineJobName The pipeline job name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    pipelineJobName: string,
    options?: PipelineJobsGetOptionalParams
  ): Promise<PipelineJobsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, pipelineJobName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new pipeline job or updates an existing one, with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param pipelineJobName The pipeline job name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    pipelineJobName: string,
    parameters: PipelineJob,
    options?: PipelineJobsCreateOrUpdateOptionalParams
  ): Promise<PipelineJobsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, pipelineJobName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a pipeline job with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param pipelineJobName The pipeline job name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    pipelineJobName: string,
    options?: PipelineJobsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, pipelineJobName, options },
      deleteOperationSpec
    );
  }

  /**
   * Updates an existing pipeline job with the given name. Properties that can be updated include:
   * description.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param pipelineJobName The pipeline job name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    pipelineJobName: string,
    parameters: PipelineJobUpdate,
    options?: PipelineJobsUpdateOptionalParams
  ): Promise<PipelineJobsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, pipelineJobName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Cancels a pipeline job with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param pipelineJobName The pipeline job name.
   * @param options The options parameters.
   */
  async beginCancel(
    resourceGroupName: string,
    accountName: string,
    pipelineJobName: string,
    options?: PipelineJobsCancelOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, accountName, pipelineJobName, options },
      cancelOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Cancels a pipeline job with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param pipelineJobName The pipeline job name.
   * @param options The options parameters.
   */
  async beginCancelAndWait(
    resourceGroupName: string,
    accountName: string,
    pipelineJobName: string,
    options?: PipelineJobsCancelOptionalParams
  ): Promise<void> {
    const poller = await this.beginCancel(
      resourceGroupName,
      accountName,
      pipelineJobName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: PipelineJobsListNextOptionalParams
  ): Promise<PipelineJobsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/pipelineJobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineJobCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/pipelineJobs/{pipelineJobName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineJob
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.pipelineJobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/pipelineJobs/{pipelineJobName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineJob
    },
    201: {
      bodyMapper: Mappers.PipelineJob
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.pipelineJobName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/pipelineJobs/{pipelineJobName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.pipelineJobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/pipelineJobs/{pipelineJobName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineJob
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.pipelineJobName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/pipelineJobs/{pipelineJobName}/cancel",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.pipelineJobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineJobCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
