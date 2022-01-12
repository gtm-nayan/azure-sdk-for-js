/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Queues } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ServiceBusManagementClient } from "../serviceBusManagementClient";
import {
  SBAuthorizationRule,
  QueuesListAuthorizationRulesNextOptionalParams,
  QueuesListAuthorizationRulesOptionalParams,
  SBQueue,
  QueuesListByNamespaceNextOptionalParams,
  QueuesListByNamespaceOptionalParams,
  QueuesListAuthorizationRulesResponse,
  QueuesCreateOrUpdateAuthorizationRuleOptionalParams,
  QueuesCreateOrUpdateAuthorizationRuleResponse,
  QueuesDeleteAuthorizationRuleOptionalParams,
  QueuesGetAuthorizationRuleOptionalParams,
  QueuesGetAuthorizationRuleResponse,
  QueuesListKeysOptionalParams,
  QueuesListKeysResponse,
  RegenerateAccessKeyParameters,
  QueuesRegenerateKeysOptionalParams,
  QueuesRegenerateKeysResponse,
  QueuesListByNamespaceResponse,
  QueuesCreateOrUpdateOptionalParams,
  QueuesCreateOrUpdateResponse,
  QueuesDeleteOptionalParams,
  QueuesGetOptionalParams,
  QueuesGetResponse,
  QueuesListAuthorizationRulesNextResponse,
  QueuesListByNamespaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Queues operations. */
export class QueuesImpl implements Queues {
  private readonly client: ServiceBusManagementClient;

  /**
   * Initialize a new instance of the class Queues class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceBusManagementClient) {
    this.client = client;
  }

  /**
   * Gets all authorization rules for a queue.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param queueName The queue name.
   * @param options The options parameters.
   */
  public listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    options?: QueuesListAuthorizationRulesOptionalParams
  ): PagedAsyncIterableIterator<SBAuthorizationRule> {
    const iter = this.listAuthorizationRulesPagingAll(
      resourceGroupName,
      namespaceName,
      queueName,
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
        return this.listAuthorizationRulesPagingPage(
          resourceGroupName,
          namespaceName,
          queueName,
          options
        );
      }
    };
  }

  private async *listAuthorizationRulesPagingPage(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    options?: QueuesListAuthorizationRulesOptionalParams
  ): AsyncIterableIterator<SBAuthorizationRule[]> {
    let result = await this._listAuthorizationRules(
      resourceGroupName,
      namespaceName,
      queueName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAuthorizationRulesNext(
        resourceGroupName,
        namespaceName,
        queueName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAuthorizationRulesPagingAll(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    options?: QueuesListAuthorizationRulesOptionalParams
  ): AsyncIterableIterator<SBAuthorizationRule> {
    for await (const page of this.listAuthorizationRulesPagingPage(
      resourceGroupName,
      namespaceName,
      queueName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the queues within a namespace.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The options parameters.
   */
  public listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: QueuesListByNamespaceOptionalParams
  ): PagedAsyncIterableIterator<SBQueue> {
    const iter = this.listByNamespacePagingAll(
      resourceGroupName,
      namespaceName,
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
        return this.listByNamespacePagingPage(
          resourceGroupName,
          namespaceName,
          options
        );
      }
    };
  }

  private async *listByNamespacePagingPage(
    resourceGroupName: string,
    namespaceName: string,
    options?: QueuesListByNamespaceOptionalParams
  ): AsyncIterableIterator<SBQueue[]> {
    let result = await this._listByNamespace(
      resourceGroupName,
      namespaceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByNamespaceNext(
        resourceGroupName,
        namespaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByNamespacePagingAll(
    resourceGroupName: string,
    namespaceName: string,
    options?: QueuesListByNamespaceOptionalParams
  ): AsyncIterableIterator<SBQueue> {
    for await (const page of this.listByNamespacePagingPage(
      resourceGroupName,
      namespaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all authorization rules for a queue.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param queueName The queue name.
   * @param options The options parameters.
   */
  private _listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    options?: QueuesListAuthorizationRulesOptionalParams
  ): Promise<QueuesListAuthorizationRulesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, queueName, options },
      listAuthorizationRulesOperationSpec
    );
  }

  /**
   * Creates an authorization rule for a queue.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param queueName The queue name.
   * @param authorizationRuleName The authorization rule name.
   * @param parameters The shared access authorization rule.
   * @param options The options parameters.
   */
  createOrUpdateAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    authorizationRuleName: string,
    parameters: SBAuthorizationRule,
    options?: QueuesCreateOrUpdateAuthorizationRuleOptionalParams
  ): Promise<QueuesCreateOrUpdateAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        queueName,
        authorizationRuleName,
        parameters,
        options
      },
      createOrUpdateAuthorizationRuleOperationSpec
    );
  }

  /**
   * Deletes a queue authorization rule.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param queueName The queue name.
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  deleteAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    authorizationRuleName: string,
    options?: QueuesDeleteAuthorizationRuleOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        queueName,
        authorizationRuleName,
        options
      },
      deleteAuthorizationRuleOperationSpec
    );
  }

  /**
   * Gets an authorization rule for a queue by rule name.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param queueName The queue name.
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  getAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    authorizationRuleName: string,
    options?: QueuesGetAuthorizationRuleOptionalParams
  ): Promise<QueuesGetAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        queueName,
        authorizationRuleName,
        options
      },
      getAuthorizationRuleOperationSpec
    );
  }

  /**
   * Primary and secondary connection strings to the queue.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param queueName The queue name.
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    authorizationRuleName: string,
    options?: QueuesListKeysOptionalParams
  ): Promise<QueuesListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        queueName,
        authorizationRuleName,
        options
      },
      listKeysOperationSpec
    );
  }

  /**
   * Regenerates the primary or secondary connection strings to the queue.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param queueName The queue name.
   * @param authorizationRuleName The authorization rule name.
   * @param parameters Parameters supplied to regenerate the authorization rule.
   * @param options The options parameters.
   */
  regenerateKeys(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    authorizationRuleName: string,
    parameters: RegenerateAccessKeyParameters,
    options?: QueuesRegenerateKeysOptionalParams
  ): Promise<QueuesRegenerateKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        queueName,
        authorizationRuleName,
        parameters,
        options
      },
      regenerateKeysOperationSpec
    );
  }

  /**
   * Gets the queues within a namespace.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The options parameters.
   */
  private _listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: QueuesListByNamespaceOptionalParams
  ): Promise<QueuesListByNamespaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      listByNamespaceOperationSpec
    );
  }

  /**
   * Creates or updates a Service Bus queue. This operation is idempotent.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param queueName The queue name.
   * @param parameters Parameters supplied to create or update a queue resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    parameters: SBQueue,
    options?: QueuesCreateOrUpdateOptionalParams
  ): Promise<QueuesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, queueName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a queue from the specified namespace in a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param queueName The queue name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    options?: QueuesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, queueName, options },
      deleteOperationSpec
    );
  }

  /**
   * Returns a description for the specified queue.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param queueName The queue name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    options?: QueuesGetOptionalParams
  ): Promise<QueuesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, queueName, options },
      getOperationSpec
    );
  }

  /**
   * ListAuthorizationRulesNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param queueName The queue name.
   * @param nextLink The nextLink from the previous successful call to the ListAuthorizationRules method.
   * @param options The options parameters.
   */
  private _listAuthorizationRulesNext(
    resourceGroupName: string,
    namespaceName: string,
    queueName: string,
    nextLink: string,
    options?: QueuesListAuthorizationRulesNextOptionalParams
  ): Promise<QueuesListAuthorizationRulesNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, queueName, nextLink, options },
      listAuthorizationRulesNextOperationSpec
    );
  }

  /**
   * ListByNamespaceNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param nextLink The nextLink from the previous successful call to the ListByNamespace method.
   * @param options The options parameters.
   */
  private _listByNamespaceNext(
    resourceGroupName: string,
    namespaceName: string,
    nextLink: string,
    options?: QueuesListByNamespaceNextOptionalParams
  ): Promise<QueuesListByNamespaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, nextLink, options },
      listByNamespaceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAuthorizationRulesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBAuthorizationRuleListResult
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
    Parameters.namespaceName1,
    Parameters.queueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAuthorizationRuleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SBAuthorizationRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.authorizationRuleName,
    Parameters.queueName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteAuthorizationRuleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.namespaceName1,
    Parameters.authorizationRuleName,
    Parameters.queueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAuthorizationRuleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBAuthorizationRule
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
    Parameters.namespaceName1,
    Parameters.authorizationRuleName,
    Parameters.queueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}/ListKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
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
    Parameters.namespaceName1,
    Parameters.authorizationRuleName,
    Parameters.queueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}/regenerateKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.authorizationRuleName,
    Parameters.queueName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByNamespaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBQueueListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SBQueue
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.queueName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.namespaceName1,
    Parameters.queueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBQueue
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
    Parameters.namespaceName1,
    Parameters.queueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAuthorizationRulesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBAuthorizationRuleListResult
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
    Parameters.namespaceName1,
    Parameters.nextLink,
    Parameters.queueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByNamespaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SBQueueListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
