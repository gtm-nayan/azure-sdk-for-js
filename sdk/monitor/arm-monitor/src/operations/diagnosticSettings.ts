/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { DiagnosticSettings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  DiagnosticSettingsGetOptionalParams,
  DiagnosticSettingsGetResponse,
  DiagnosticSettingsResource,
  DiagnosticSettingsCreateOrUpdateOptionalParams,
  DiagnosticSettingsCreateOrUpdateResponse,
  DiagnosticSettingsDeleteOptionalParams,
  DiagnosticSettingsListOptionalParams,
  DiagnosticSettingsListResponse
} from "../models";

/** Class containing DiagnosticSettings operations. */
export class DiagnosticSettingsImpl implements DiagnosticSettings {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class DiagnosticSettings class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Gets the active diagnostic settings for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param name The name of the diagnostic setting.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    name: string,
    options?: DiagnosticSettingsGetOptionalParams
  ): Promise<DiagnosticSettingsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, name, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates diagnostic settings for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param name The name of the diagnostic setting.
   * @param parameters Parameters supplied to the operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceUri: string,
    name: string,
    parameters: DiagnosticSettingsResource,
    options?: DiagnosticSettingsCreateOrUpdateOptionalParams
  ): Promise<DiagnosticSettingsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, name, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes existing diagnostic settings for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param name The name of the diagnostic setting.
   * @param options The options parameters.
   */
  delete(
    resourceUri: string,
    name: string,
    options?: DiagnosticSettingsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceUri, name, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets the active diagnostic settings list for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: DiagnosticSettingsListOptionalParams
  ): Promise<DiagnosticSettingsListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/diagnosticSettings/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticSettingsResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host, Parameters.resourceUri, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/diagnosticSettings/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticSettingsResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host, Parameters.resourceUri, Parameters.name],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/diagnosticSettings/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host, Parameters.resourceUri, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/diagnosticSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticSettingsResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
