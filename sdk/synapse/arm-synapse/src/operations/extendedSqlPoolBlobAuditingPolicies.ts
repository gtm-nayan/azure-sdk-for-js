/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/extendedSqlPoolBlobAuditingPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a ExtendedSqlPoolBlobAuditingPolicies. */
export class ExtendedSqlPoolBlobAuditingPolicies {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a ExtendedSqlPoolBlobAuditingPolicies.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets an extended Sql pool's blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, callback: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicy>): void;
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicy>, callback?: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicy>): Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesGetResponse>;
  }

  /**
   * Creates or updates an extended Sql pool's blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters The extended Sql pool blob auditing policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.ExtendedSqlPoolBlobAuditingPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters The extended Sql pool blob auditing policy.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.ExtendedSqlPoolBlobAuditingPolicy, callback: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters The extended Sql pool blob auditing policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.ExtendedSqlPoolBlobAuditingPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicy>): void;
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.ExtendedSqlPoolBlobAuditingPolicy, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicy>, callback?: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicy>): Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Lists extended auditing settings of a Sql pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolResponse>
   */
  listBySqlPool(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param callback The callback
   */
  listBySqlPool(resourceGroupName: string, workspaceName: string, sqlPoolName: string, callback: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySqlPool(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicyListResult>): void;
  listBySqlPool(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicyListResult>, callback?: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicyListResult>): Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      listBySqlPoolOperationSpec,
      callback) as Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolResponse>;
  }

  /**
   * Lists extended auditing settings of a Sql pool.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolNextResponse>
   */
  listBySqlPoolNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySqlPoolNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySqlPoolNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicyListResult>): void;
  listBySqlPoolNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicyListResult>, callback?: msRest.ServiceCallback<Models.ExtendedSqlPoolBlobAuditingPolicyListResult>): Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySqlPoolNextOperationSpec,
      callback) as Promise<Models.ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.blobAuditingPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedSqlPoolBlobAuditingPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.blobAuditingPolicyName
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
      ...Mappers.ExtendedSqlPoolBlobAuditingPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedSqlPoolBlobAuditingPolicy
    },
    201: {
      bodyMapper: Mappers.ExtendedSqlPoolBlobAuditingPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySqlPoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/extendedAuditingSettings",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedSqlPoolBlobAuditingPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySqlPoolNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ExtendedSqlPoolBlobAuditingPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
