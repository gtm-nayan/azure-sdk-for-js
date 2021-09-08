/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/sqlPoolWorkloadClassifierMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a SqlPoolWorkloadClassifier. */
export class SqlPoolWorkloadClassifier {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a SqlPoolWorkloadClassifier.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a workload classifier of Sql pool's workload group.
   * @summary Get workload classifier
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group.
   * @param workloadClassifierName The name of the workload classifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolWorkloadClassifierGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolWorkloadClassifierGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group.
   * @param workloadClassifierName The name of the workload classifier.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, callback: msRest.ServiceCallback<Models.WorkloadClassifier>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group.
   * @param workloadClassifierName The name of the workload classifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkloadClassifier>): void;
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkloadClassifier>, callback?: msRest.ServiceCallback<Models.WorkloadClassifier>): Promise<Models.SqlPoolWorkloadClassifierGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        workloadGroupName,
        workloadClassifierName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SqlPoolWorkloadClassifierGetResponse>;
  }

  /**
   * Create Or Update workload classifier for a Sql pool's workload group.
   * @summary Create Or Update workload classifier
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group.
   * @param workloadClassifierName The name of the workload classifier.
   * @param parameters The properties of the workload classifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolWorkloadClassifierCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, parameters: Models.WorkloadClassifier, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolWorkloadClassifierCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,workspaceName,sqlPoolName,workloadGroupName,workloadClassifierName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SqlPoolWorkloadClassifierCreateOrUpdateResponse>;
  }

  /**
   * Remove workload classifier of a Sql pool's workload group.
   * @summary Remove workload classifier
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group.
   * @param workloadClassifierName The name of the workload classifier.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,workspaceName,sqlPoolName,workloadGroupName,workloadClassifierName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Get list of  Sql pool's workload classifier for workload groups.
   * @summary Sql pool's workload classifier
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolWorkloadClassifierListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolWorkloadClassifierListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group.
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  list(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkloadClassifierListResult>, callback?: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): Promise<Models.SqlPoolWorkloadClassifierListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        workloadGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SqlPoolWorkloadClassifierListResponse>;
  }

  /**
   * Create Or Update workload classifier for a Sql pool's workload group.
   * @summary Create Or Update workload classifier
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group.
   * @param workloadClassifierName The name of the workload classifier.
   * @param parameters The properties of the workload classifier.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, parameters: Models.WorkloadClassifier, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        workloadGroupName,
        workloadClassifierName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Remove workload classifier of a Sql pool's workload group.
   * @summary Remove workload classifier
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param workloadGroupName The name of the workload group.
   * @param workloadClassifierName The name of the workload classifier.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, workspaceName: string, sqlPoolName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        workloadGroupName,
        workloadClassifierName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Get list of  Sql pool's workload classifier for workload groups.
   * @summary Sql pool's workload classifier
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolWorkloadClassifierListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolWorkloadClassifierListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkloadClassifierListResult>, callback?: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): Promise<Models.SqlPoolWorkloadClassifierListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SqlPoolWorkloadClassifierListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.workloadGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifierListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.WorkloadClassifier,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    201: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifierListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
