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
import * as Mappers from "../models/bMSPrepareDataMoveOperationResultMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BMSPrepareDataMoveOperationResult. */
export class BMSPrepareDataMoveOperationResult {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BMSPrepareDataMoveOperationResult.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Fetches Operation Result for Prepare Data Move
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param operationId
   * @param [options] The optional parameters
   * @returns Promise<Models.BMSPrepareDataMoveOperationResultGetResponse>
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    operationId: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.BMSPrepareDataMoveOperationResultGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param operationId
   * @param callback The callback
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    operationId: string,
    callback: msRest.ServiceCallback<Models.VaultStorageConfigOperationResultResponseUnion>
  ): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param operationId
   * @param options The optional parameters
   * @param callback The callback
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    operationId: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.VaultStorageConfigOperationResultResponseUnion>
  ): void;
  get(
    vaultName: string,
    resourceGroupName: string,
    operationId: string,
    options?:
      | msRest.RequestOptionsBase
      | msRest.ServiceCallback<Models.VaultStorageConfigOperationResultResponseUnion>,
    callback?: msRest.ServiceCallback<Models.VaultStorageConfigOperationResultResponseUnion>
  ): Promise<Models.BMSPrepareDataMoveOperationResultGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        operationId,
        options
      },
      getOperationSpec,
      callback
    ) as Promise<Models.BMSPrepareDataMoveOperationResultGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig/operationResults/{operationId}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.operationId
  ],
  queryParameters: [Parameters.apiVersion0],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.VaultStorageConfigOperationResultResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};
