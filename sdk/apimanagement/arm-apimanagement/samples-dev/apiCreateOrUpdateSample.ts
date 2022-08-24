/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ApiCreateOrUpdateParameter,
  ApiManagementClient
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateApi.json
 */
async function apiManagementCreateApi() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "tempgroup";
  const parameters: ApiCreateOrUpdateParameter = {
    path: "newapiPath",
    description: "apidescription5200",
    authenticationSettings: {
      oAuth2: {
        authorizationServerId: "authorizationServerId2283",
        scope: "oauth2scope2580"
      }
    },
    displayName: "apiname1463",
    protocols: ["https", "http"],
    serviceUrl: "http://newechoapi.cloudapp.net/api",
    subscriptionKeyParameterNames: { header: "header4520", query: "query3037" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateApi().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateApiClone.json
 */
async function apiManagementCreateApiClone() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "echo-api2";
  const parameters: ApiCreateOrUpdateParameter = {
    path: "echo2",
    description: "Copy of Existing Echo Api including Operations.",
    displayName: "Echo API2",
    isCurrent: true,
    protocols: ["http", "https"],
    serviceUrl: "http://echoapi.cloudapp.net/api",
    sourceApiId:
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/58a4aeac497000007d040001",
    subscriptionRequired: true
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateApiClone().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateApiNewVersionUsingExistingApi.json
 */
async function apiManagementCreateApiNewVersionUsingExistingApi() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "echoapiv3";
  const parameters: ApiCreateOrUpdateParameter = {
    path: "echo2",
    description:
      "Create Echo API into a new Version using Existing Version Set and Copy all Operations.",
    apiVersion: "v4",
    apiVersionSetId:
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apiVersionSets/aa9c59e6-c0cd-4258-9356-9ca7d2f0b458",
    displayName: "Echo API2",
    isCurrent: true,
    protocols: ["http", "https"],
    serviceUrl: "http://echoapi.cloudapp.net/api",
    sourceApiId:
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/echoPath",
    subscriptionRequired: true
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateApiNewVersionUsingExistingApi().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateApiRevisionFromExistingApi.json
 */
async function apiManagementCreateApiRevisionFromExistingApi() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "echo-api;rev=3";
  const parameters: ApiCreateOrUpdateParameter = {
    path: "echo",
    apiRevisionDescription: "Creating a Revision of an existing API",
    serviceUrl: "http://echoapi.cloudapp.net/apiv3",
    sourceApiId:
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/echo-api"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateApiRevisionFromExistingApi().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateApiUsingImportOverrideServiceUrl.json
 */
async function apiManagementCreateApiUsingImportOverrideServiceUrl() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "apidocs";
  const parameters: ApiCreateOrUpdateParameter = {
    format: "swagger-link",
    path: "petstoreapi123",
    serviceUrl: "http://petstore.swagger.wordnik.com/api",
    value: "http://apimpimportviaurl.azurewebsites.net/api/apidocs/"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateApiUsingImportOverrideServiceUrl().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateApiUsingOai3Import.json
 */
async function apiManagementCreateApiUsingOai3Import() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "petstore";
  const parameters: ApiCreateOrUpdateParameter = {
    format: "openapi-link",
    path: "petstore",
    value:
      "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateApiUsingOai3Import().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateApiUsingSwaggerImport.json
 */
async function apiManagementCreateApiUsingSwaggerImport() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "petstore";
  const parameters: ApiCreateOrUpdateParameter = {
    format: "swagger-link-json",
    path: "petstore",
    value: "http://petstore.swagger.io/v2/swagger.json"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateApiUsingSwaggerImport().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateApiUsingWadlImport.json
 */
async function apiManagementCreateApiUsingWadlImport() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "petstore";
  const parameters: ApiCreateOrUpdateParameter = {
    format: "wadl-link-json",
    path: "collector",
    value:
      "https://developer.cisco.com/media/wae-release-6-2-api-reference/wae-collector-rest-api/application.wadl"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateApiUsingWadlImport().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateApiWithOpenIdConnect.json
 */
async function apiManagementCreateApiWithOpenIdConnect() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "tempgroup";
  const parameters: ApiCreateOrUpdateParameter = {
    path: "petstore",
    description:
      "This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.",
    authenticationSettings: {
      openid: {
        bearerTokenSendingMethods: ["authorizationHeader"],
        openidProviderId: "testopenid"
      }
    },
    displayName: "Swagger Petstore",
    protocols: ["https"],
    serviceUrl: "http://petstore.swagger.io/v2",
    subscriptionKeyParameterNames: {
      header: "Ocp-Apim-Subscription-Key",
      query: "subscription-key"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateApiWithOpenIdConnect().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateGraphQLApi.json
 */
async function apiManagementCreateGraphQlApi() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "tempgroup";
  const parameters: ApiCreateOrUpdateParameter = {
    apiType: "graphql",
    path: "graphql-api",
    description: "apidescription5200",
    displayName: "apiname1463",
    protocols: ["http", "https"],
    serviceUrl: "https://api.spacex.land/graphql"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateGraphQlApi().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateSoapPassThroughApiUsingWsdlImport.json
 */
async function apiManagementCreateSoapPassThroughApiUsingWsdlImport() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "soapApi";
  const parameters: ApiCreateOrUpdateParameter = {
    format: "wsdl-link",
    path: "currency",
    soapApiType: "soap",
    value: "http://www.webservicex.net/CurrencyConvertor.asmx?WSDL",
    wsdlSelector: {
      wsdlEndpointName: "CurrencyConvertorSoap",
      wsdlServiceName: "CurrencyConvertor"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateSoapPassThroughApiUsingWsdlImport().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateSoapToRestApiUsingWsdlImport.json
 */
async function apiManagementCreateSoapToRestApiUsingWsdlImport() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "soapApi";
  const parameters: ApiCreateOrUpdateParameter = {
    format: "wsdl-link",
    path: "currency",
    value: "http://www.webservicex.net/CurrencyConvertor.asmx?WSDL",
    wsdlSelector: {
      wsdlEndpointName: "CurrencyConvertorSoap",
      wsdlServiceName: "CurrencyConvertor"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateSoapToRestApiUsingWsdlImport().catch(console.error);

/**
 * This sample demonstrates how to Creates new or updates existing specified API of the API Management service instance.
 *
 * @summary Creates new or updates existing specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateWebsocketApi.json
 */
async function apiManagementCreateWebSocketApi() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "tempgroup";
  const parameters: ApiCreateOrUpdateParameter = {
    apiType: "websocket",
    path: "newapiPath",
    description: "apidescription5200",
    displayName: "apiname1463",
    protocols: ["wss", "ws"],
    serviceUrl: "wss://echo.websocket.org"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    apiId,
    parameters
  );
  console.log(result);
}

apiManagementCreateWebSocketApi().catch(console.error);
