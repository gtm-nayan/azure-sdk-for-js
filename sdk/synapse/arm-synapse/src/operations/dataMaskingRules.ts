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
import * as Mappers from "../models/dataMaskingRulesMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a DataMaskingRules. */
export class DataMaskingRules {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a DataMaskingRules.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a Sql pool data masking rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param parameters The required parameters for creating or updating a data masking rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataMaskingRulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, dataMaskingRuleName: string, parameters: Models.DataMaskingRule, options?: msRest.RequestOptionsBase): Promise<Models.DataMaskingRulesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param parameters The required parameters for creating or updating a data masking rule.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, dataMaskingRuleName: string, parameters: Models.DataMaskingRule, callback: msRest.ServiceCallback<Models.DataMaskingRule>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param parameters The required parameters for creating or updating a data masking rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, dataMaskingRuleName: string, parameters: Models.DataMaskingRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataMaskingRule>): void;
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, dataMaskingRuleName: string, parameters: Models.DataMaskingRule, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataMaskingRule>, callback?: msRest.ServiceCallback<Models.DataMaskingRule>): Promise<Models.DataMaskingRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        dataMaskingRuleName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DataMaskingRulesCreateOrUpdateResponse>;
  }

  /**
   * Gets the specific Sql pool data masking rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataMaskingRulesGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, dataMaskingRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.DataMaskingRulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, dataMaskingRuleName: string, callback: msRest.ServiceCallback<Models.DataMaskingRule>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, dataMaskingRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataMaskingRule>): void;
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, dataMaskingRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataMaskingRule>, callback?: msRest.ServiceCallback<Models.DataMaskingRule>): Promise<Models.DataMaskingRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        dataMaskingRuleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DataMaskingRulesGetResponse>;
  }

  /**
   * Gets a list of Sql pool data masking rules.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.DataMaskingRulesListBySqlPoolResponse>
   */
  listBySqlPool(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.DataMaskingRulesListBySqlPoolResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param callback The callback
   */
  listBySqlPool(resourceGroupName: string, workspaceName: string, sqlPoolName: string, callback: msRest.ServiceCallback<Models.DataMaskingRuleListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySqlPool(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataMaskingRuleListResult>): void;
  listBySqlPool(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataMaskingRuleListResult>, callback?: msRest.ServiceCallback<Models.DataMaskingRuleListResult>): Promise<Models.DataMaskingRulesListBySqlPoolResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      listBySqlPoolOperationSpec,
      callback) as Promise<Models.DataMaskingRulesListBySqlPoolResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules/{dataMaskingRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.dataMaskingPolicyName,
    Parameters.dataMaskingRuleName
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
      ...Mappers.DataMaskingRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataMaskingRule
    },
    201: {
      bodyMapper: Mappers.DataMaskingRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules/{dataMaskingRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.dataMaskingPolicyName,
    Parameters.dataMaskingRuleName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataMaskingRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBySqlPoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules",
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
      bodyMapper: Mappers.DataMaskingRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
