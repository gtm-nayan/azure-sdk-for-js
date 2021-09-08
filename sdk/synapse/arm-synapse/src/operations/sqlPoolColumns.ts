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
import * as Mappers from "../models/sqlPoolColumnsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a SqlPoolColumns. */
export class SqlPoolColumns {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a SqlPoolColumns.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Get Sql pool column
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolColumnsGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolColumnsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, callback: msRest.ServiceCallback<Models.SqlPoolColumn>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SqlPoolColumn>): void;
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SqlPoolColumn>, callback?: msRest.ServiceCallback<Models.SqlPoolColumn>): Promise<Models.SqlPoolColumnsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        schemaName,
        tableName,
        columnName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SqlPoolColumnsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolColumn
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
