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
import * as Mappers from "../models/workspaceManagedSqlServerExtendedBlobAuditingPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a WorkspaceManagedSqlServerExtendedBlobAuditingPolicies. */
export class WorkspaceManagedSqlServerExtendedBlobAuditingPolicies {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a WorkspaceManagedSqlServerExtendedBlobAuditingPolicies.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a workspace SQL server's extended blob auditing policy.
   * @summary Get server's extended blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicy>): void;
  get(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicy>, callback?: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicy>): Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetResponse>;
  }

  /**
   * Create or Update a workspace managed sql server's extended blob auditing policy.
   * @summary Create or Update server's extended blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param parameters Properties of extended blob auditing policy.
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, parameters: Models.ExtendedServerBlobAuditingPolicy, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,workspaceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse>;
  }

  /**
   * List workspace managed sql server's extended blob auditing policies.
   * @summary List server's extended blob auditing policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceResponse>
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicyListResult>): void;
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicyListResult>, callback?: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicyListResult>): Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceResponse>;
  }

  /**
   * Create or Update a workspace managed sql server's extended blob auditing policy.
   * @summary Create or Update server's extended blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param parameters Properties of extended blob auditing policy.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, workspaceName: string, parameters: Models.ExtendedServerBlobAuditingPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * List workspace managed sql server's extended blob auditing policies.
   * @summary List server's extended blob auditing policies.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceNextResponse>
   */
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicyListResult>): void;
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicyListResult>, callback?: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicyListResult>): Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByWorkspaceNextOperationSpec,
      callback) as Promise<Models.WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
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
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/extendedAuditingSettings",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
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
      ...Mappers.ExtendedServerBlobAuditingPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
