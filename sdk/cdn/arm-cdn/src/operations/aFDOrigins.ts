/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AFDOrigins } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AFDOrigin,
  AFDOriginsListByOriginGroupNextOptionalParams,
  AFDOriginsListByOriginGroupOptionalParams,
  AFDOriginsListByOriginGroupResponse,
  AFDOriginsGetOptionalParams,
  AFDOriginsGetResponse,
  AFDOriginsCreateOptionalParams,
  AFDOriginsCreateResponse,
  AFDOriginUpdateParameters,
  AFDOriginsUpdateOptionalParams,
  AFDOriginsUpdateResponse,
  AFDOriginsDeleteOptionalParams,
  AFDOriginsListByOriginGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AFDOrigins operations. */
export class AFDOriginsImpl implements AFDOrigins {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class AFDOrigins class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the existing origins within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param options The options parameters.
   */
  public listByOriginGroup(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AFDOriginsListByOriginGroupOptionalParams
  ): PagedAsyncIterableIterator<AFDOrigin> {
    const iter = this.listByOriginGroupPagingAll(
      resourceGroupName,
      profileName,
      originGroupName,
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
        return this.listByOriginGroupPagingPage(
          resourceGroupName,
          profileName,
          originGroupName,
          options
        );
      }
    };
  }

  private async *listByOriginGroupPagingPage(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AFDOriginsListByOriginGroupOptionalParams
  ): AsyncIterableIterator<AFDOrigin[]> {
    let result = await this._listByOriginGroup(
      resourceGroupName,
      profileName,
      originGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByOriginGroupNext(
        resourceGroupName,
        profileName,
        originGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByOriginGroupPagingAll(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AFDOriginsListByOriginGroupOptionalParams
  ): AsyncIterableIterator<AFDOrigin> {
    for await (const page of this.listByOriginGroupPagingPage(
      resourceGroupName,
      profileName,
      originGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the existing origins within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param options The options parameters.
   */
  private _listByOriginGroup(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AFDOriginsListByOriginGroupOptionalParams
  ): Promise<AFDOriginsListByOriginGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, originGroupName, options },
      listByOriginGroupOperationSpec
    );
  }

  /**
   * Gets an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    options?: AFDOriginsGetOptionalParams
  ): Promise<AFDOriginsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, originGroupName, originName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new origin within the specified origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin that is unique within the profile.
   * @param origin Origin properties
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    origin: AFDOrigin,
    options?: AFDOriginsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AFDOriginsCreateResponse>,
      AFDOriginsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AFDOriginsCreateResponse> => {
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
      {
        resourceGroupName,
        profileName,
        originGroupName,
        originName,
        origin,
        options
      },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Creates a new origin within the specified origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin that is unique within the profile.
   * @param origin Origin properties
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    origin: AFDOrigin,
    options?: AFDOriginsCreateOptionalParams
  ): Promise<AFDOriginsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      profileName,
      originGroupName,
      originName,
      origin,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param originUpdateProperties Origin properties
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    originUpdateProperties: AFDOriginUpdateParameters,
    options?: AFDOriginsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AFDOriginsUpdateResponse>,
      AFDOriginsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AFDOriginsUpdateResponse> => {
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
      {
        resourceGroupName,
        profileName,
        originGroupName,
        originName,
        originUpdateProperties,
        options
      },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Updates an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param originUpdateProperties Origin properties
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    originUpdateProperties: AFDOriginUpdateParameters,
    options?: AFDOriginsUpdateOptionalParams
  ): Promise<AFDOriginsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      profileName,
      originGroupName,
      originName,
      originUpdateProperties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    options?: AFDOriginsDeleteOptionalParams
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
      { resourceGroupName, profileName, originGroupName, originName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Deletes an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    options?: AFDOriginsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      originGroupName,
      originName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByOriginGroupNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param nextLink The nextLink from the previous successful call to the ListByOriginGroup method.
   * @param options The options parameters.
   */
  private _listByOriginGroupNext(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    nextLink: string,
    options?: AFDOriginsListByOriginGroupNextOptionalParams
  ): Promise<AFDOriginsListByOriginGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, originGroupName, nextLink, options },
      listByOriginGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByOriginGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOriginListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOrigin
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.originName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOrigin
    },
    201: {
      bodyMapper: Mappers.AFDOrigin
    },
    202: {
      bodyMapper: Mappers.AFDOrigin
    },
    204: {
      bodyMapper: Mappers.AFDOrigin
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.origin1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.originName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOrigin
    },
    201: {
      bodyMapper: Mappers.AFDOrigin
    },
    202: {
      bodyMapper: Mappers.AFDOrigin
    },
    204: {
      bodyMapper: Mappers.AFDOrigin
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.originUpdateProperties1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.originName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.originName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByOriginGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOriginListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.nextLink,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
