/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Fleets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerServiceFleetClient } from "../containerServiceFleetClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Fleet,
  FleetsListBySubscriptionNextOptionalParams,
  FleetsListBySubscriptionOptionalParams,
  FleetsListBySubscriptionResponse,
  FleetsListByResourceGroupNextOptionalParams,
  FleetsListByResourceGroupOptionalParams,
  FleetsListByResourceGroupResponse,
  FleetsGetOptionalParams,
  FleetsGetResponse,
  FleetsCreateOrUpdateOptionalParams,
  FleetsCreateOrUpdateResponse,
  FleetPatch,
  FleetsUpdateOptionalParams,
  FleetsUpdateResponse,
  FleetsDeleteOptionalParams,
  FleetsListCredentialsOptionalParams,
  FleetsListCredentialsResponse,
  FleetsListBySubscriptionNextResponse,
  FleetsListByResourceGroupNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Fleets operations. */
export class FleetsImpl implements Fleets {
  private readonly client: ContainerServiceFleetClient;

  /**
   * Initialize a new instance of the class Fleets class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerServiceFleetClient) {
    this.client = client;
  }

  /**
   * Lists fleets in the specified subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: FleetsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<Fleet> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: FleetsListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Fleet[]> {
    let result: FleetsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: FleetsListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<Fleet> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists fleets in the specified subscription and resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: FleetsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Fleet> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: FleetsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Fleet[]> {
    let result: FleetsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: FleetsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<Fleet> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists fleets in the specified subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: FleetsListBySubscriptionOptionalParams,
  ): Promise<FleetsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Lists fleets in the specified subscription and resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: FleetsListByResourceGroupOptionalParams,
  ): Promise<FleetsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Gets a Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsGetOptionalParams,
  ): Promise<FleetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, fleetName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    fleetName: string,
    resource: Fleet,
    options?: FleetsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FleetsCreateOrUpdateResponse>,
      FleetsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<FleetsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, fleetName, resource, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      FleetsCreateOrUpdateResponse,
      OperationState<FleetsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    fleetName: string,
    resource: Fleet,
    options?: FleetsCreateOrUpdateOptionalParams,
  ): Promise<FleetsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      fleetName,
      resource,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a Fleet
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    fleetName: string,
    properties: FleetPatch,
    options?: FleetsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<FleetsUpdateResponse>, FleetsUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<FleetsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, fleetName, properties, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      FleetsUpdateResponse,
      OperationState<FleetsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "original-uri",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a Fleet
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    fleetName: string,
    properties: FleetPatch,
    options?: FleetsUpdateOptionalParams,
  ): Promise<FleetsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      fleetName,
      properties,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a Fleet
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, fleetName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a Fleet
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      fleetName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the user credentials of a Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  listCredentials(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsListCredentialsOptionalParams,
  ): Promise<FleetsListCredentialsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, fleetName, options },
      listCredentialsOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: FleetsListBySubscriptionNextOptionalParams,
  ): Promise<FleetsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: FleetsListByResourceGroupNextOptionalParams,
  ): Promise<FleetsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/fleets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FleetListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FleetListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Fleet,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fleetName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Fleet,
    },
    201: {
      bodyMapper: Mappers.Fleet,
    },
    202: {
      bodyMapper: Mappers.Fleet,
    },
    204: {
      bodyMapper: Mappers.Fleet,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fleetName,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Fleet,
    },
    201: {
      bodyMapper: Mappers.Fleet,
    },
    202: {
      bodyMapper: Mappers.Fleet,
    },
    204: {
      bodyMapper: Mappers.Fleet,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fleetName,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fleetName,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer,
};
const listCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/listCredentials",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FleetCredentialResults,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.fleetName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FleetListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FleetListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
