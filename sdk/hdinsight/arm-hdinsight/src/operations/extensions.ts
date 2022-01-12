/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Extensions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HDInsightManagementClient } from "../hDInsightManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ClusterMonitoringRequest,
  ExtensionsEnableMonitoringOptionalParams,
  ExtensionsGetMonitoringStatusOptionalParams,
  ExtensionsGetMonitoringStatusResponse,
  ExtensionsDisableMonitoringOptionalParams,
  AzureMonitorRequest,
  ExtensionsEnableAzureMonitorOptionalParams,
  ExtensionsGetAzureMonitorStatusOptionalParams,
  ExtensionsGetAzureMonitorStatusResponse,
  ExtensionsDisableAzureMonitorOptionalParams,
  Extension,
  ExtensionsCreateOptionalParams,
  ExtensionsGetOptionalParams,
  ExtensionsGetResponse,
  ExtensionsDeleteOptionalParams,
  ExtensionsGetAzureAsyncOperationStatusOptionalParams,
  ExtensionsGetAzureAsyncOperationStatusResponse
} from "../models";

/** Class containing Extensions operations. */
export class ExtensionsImpl implements Extensions {
  private readonly client: HDInsightManagementClient;

  /**
   * Initialize a new instance of the class Extensions class.
   * @param client Reference to the service client
   */
  constructor(client: HDInsightManagementClient) {
    this.client = client;
  }

  /**
   * Enables the Operations Management Suite (OMS) on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The Operations Management Suite (OMS) workspace parameters.
   * @param options The options parameters.
   */
  async beginEnableMonitoring(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterMonitoringRequest,
    options?: ExtensionsEnableMonitoringOptionalParams
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
      { resourceGroupName, clusterName, parameters, options },
      enableMonitoringOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Enables the Operations Management Suite (OMS) on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The Operations Management Suite (OMS) workspace parameters.
   * @param options The options parameters.
   */
  async beginEnableMonitoringAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterMonitoringRequest,
    options?: ExtensionsEnableMonitoringOptionalParams
  ): Promise<void> {
    const poller = await this.beginEnableMonitoring(
      resourceGroupName,
      clusterName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the status of Operations Management Suite (OMS) on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  getMonitoringStatus(
    resourceGroupName: string,
    clusterName: string,
    options?: ExtensionsGetMonitoringStatusOptionalParams
  ): Promise<ExtensionsGetMonitoringStatusResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      getMonitoringStatusOperationSpec
    );
  }

  /**
   * Disables the Operations Management Suite (OMS) on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  async beginDisableMonitoring(
    resourceGroupName: string,
    clusterName: string,
    options?: ExtensionsDisableMonitoringOptionalParams
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
      { resourceGroupName, clusterName, options },
      disableMonitoringOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Disables the Operations Management Suite (OMS) on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  async beginDisableMonitoringAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ExtensionsDisableMonitoringOptionalParams
  ): Promise<void> {
    const poller = await this.beginDisableMonitoring(
      resourceGroupName,
      clusterName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Enables the Azure Monitor on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The Log Analytics workspace parameters.
   * @param options The options parameters.
   */
  async beginEnableAzureMonitor(
    resourceGroupName: string,
    clusterName: string,
    parameters: AzureMonitorRequest,
    options?: ExtensionsEnableAzureMonitorOptionalParams
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
      { resourceGroupName, clusterName, parameters, options },
      enableAzureMonitorOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Enables the Azure Monitor on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param parameters The Log Analytics workspace parameters.
   * @param options The options parameters.
   */
  async beginEnableAzureMonitorAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: AzureMonitorRequest,
    options?: ExtensionsEnableAzureMonitorOptionalParams
  ): Promise<void> {
    const poller = await this.beginEnableAzureMonitor(
      resourceGroupName,
      clusterName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the status of Azure Monitor on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  getAzureMonitorStatus(
    resourceGroupName: string,
    clusterName: string,
    options?: ExtensionsGetAzureMonitorStatusOptionalParams
  ): Promise<ExtensionsGetAzureMonitorStatusResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      getAzureMonitorStatusOperationSpec
    );
  }

  /**
   * Disables the Azure Monitor on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  async beginDisableAzureMonitor(
    resourceGroupName: string,
    clusterName: string,
    options?: ExtensionsDisableAzureMonitorOptionalParams
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
      { resourceGroupName, clusterName, options },
      disableAzureMonitorOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Disables the Azure Monitor on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  async beginDisableAzureMonitorAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ExtensionsDisableAzureMonitorOptionalParams
  ): Promise<void> {
    const poller = await this.beginDisableAzureMonitor(
      resourceGroupName,
      clusterName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Creates an HDInsight cluster extension.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param parameters The cluster extensions create request.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    clusterName: string,
    extensionName: string,
    parameters: Extension,
    options?: ExtensionsCreateOptionalParams
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
      { resourceGroupName, clusterName, extensionName, parameters, options },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Creates an HDInsight cluster extension.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param parameters The cluster extensions create request.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    clusterName: string,
    extensionName: string,
    parameters: Extension,
    options?: ExtensionsCreateOptionalParams
  ): Promise<void> {
    const poller = await this.beginCreate(
      resourceGroupName,
      clusterName,
      extensionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the extension properties for the specified HDInsight cluster extension.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    extensionName: string,
    options?: ExtensionsGetOptionalParams
  ): Promise<ExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, extensionName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes the specified extension for HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterName: string,
    extensionName: string,
    options?: ExtensionsDeleteOptionalParams
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
      { resourceGroupName, clusterName, extensionName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Deletes the specified extension for HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    extensionName: string,
    options?: ExtensionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterName,
      extensionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the async operation status.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param extensionName The name of the cluster extension.
   * @param operationId The long running operation id.
   * @param options The options parameters.
   */
  getAzureAsyncOperationStatus(
    resourceGroupName: string,
    clusterName: string,
    extensionName: string,
    operationId: string,
    options?: ExtensionsGetAzureAsyncOperationStatusOptionalParams
  ): Promise<ExtensionsGetAzureAsyncOperationStatusResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, extensionName, operationId, options },
      getAzureAsyncOperationStatusOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const enableMonitoringOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
  httpMethod: "PUT",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getMonitoringStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterMonitoringResponse
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
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const disableMonitoringOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring",
  httpMethod: "DELETE",
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
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const enableAzureMonitorOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/azureMonitor",
  httpMethod: "PUT",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getAzureMonitorStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/azureMonitor",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorResponse
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
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const disableAzureMonitorOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/azureMonitor",
  httpMethod: "DELETE",
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
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
  httpMethod: "PUT",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterMonitoringResponse
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
    Parameters.clusterName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}",
  httpMethod: "DELETE",
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
    Parameters.clusterName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAzureAsyncOperationStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}/azureAsyncOperations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AsyncOperationResult
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
    Parameters.clusterName,
    Parameters.operationId,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
