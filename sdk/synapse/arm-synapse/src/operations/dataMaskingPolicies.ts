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
import * as Mappers from "../models/dataMaskingPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a DataMaskingPolicies. */
export class DataMaskingPolicies {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a DataMaskingPolicies.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a Sql pool data masking policy
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters Parameters for creating or updating a data masking policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataMaskingPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.DataMaskingPolicy, options?: msRest.RequestOptionsBase): Promise<Models.DataMaskingPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters Parameters for creating or updating a data masking policy.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.DataMaskingPolicy, callback: msRest.ServiceCallback<Models.DataMaskingPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters Parameters for creating or updating a data masking policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.DataMaskingPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataMaskingPolicy>): void;
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.DataMaskingPolicy, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataMaskingPolicy>, callback?: msRest.ServiceCallback<Models.DataMaskingPolicy>): Promise<Models.DataMaskingPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DataMaskingPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Gets a Sql pool data masking policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.DataMaskingPoliciesGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.DataMaskingPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, callback: msRest.ServiceCallback<Models.DataMaskingPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataMaskingPolicy>): void;
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataMaskingPolicy>, callback?: msRest.ServiceCallback<Models.DataMaskingPolicy>): Promise<Models.DataMaskingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DataMaskingPoliciesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataMaskingPolicies/{dataMaskingPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.dataMaskingPolicyName
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
      ...Mappers.DataMaskingPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataMaskingPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataMaskingPolicies/{dataMaskingPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.dataMaskingPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataMaskingPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
