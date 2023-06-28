/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  IpPrefix,
  IpPrefixesListByResourceGroupOptionalParams,
  IpPrefixesListBySubscriptionOptionalParams,
  IpPrefixesCreateOptionalParams,
  IpPrefixesCreateResponse,
  IpPrefixesGetOptionalParams,
  IpPrefixesGetResponse,
  IpPrefixPatch,
  IpPrefixesUpdateOptionalParams,
  IpPrefixesUpdateResponse,
  IpPrefixesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IpPrefixes. */
export interface IpPrefixes {
  /**
   * Implements IpPrefixes list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: IpPrefixesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<IpPrefix>;
  /**
   * Implements IpPrefixes list by subscription GET method.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: IpPrefixesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<IpPrefix>;
  /**
   * Implements IP Prefix PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    ipPrefixName: string,
    body: IpPrefix,
    options?: IpPrefixesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpPrefixesCreateResponse>,
      IpPrefixesCreateResponse
    >
  >;
  /**
   * Implements IP Prefix PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    ipPrefixName: string,
    body: IpPrefix,
    options?: IpPrefixesCreateOptionalParams
  ): Promise<IpPrefixesCreateResponse>;
  /**
   * Implements IP Prefix GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ipPrefixName: string,
    options?: IpPrefixesGetOptionalParams
  ): Promise<IpPrefixesGetResponse>;
  /**
   * API to update certain properties of the IP Prefix resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix
   * @param body IP Prefix properties to update.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    ipPrefixName: string,
    body: IpPrefixPatch,
    options?: IpPrefixesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<IpPrefixesUpdateResponse>,
      IpPrefixesUpdateResponse
    >
  >;
  /**
   * API to update certain properties of the IP Prefix resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix
   * @param body IP Prefix properties to update.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    ipPrefixName: string,
    body: IpPrefixPatch,
    options?: IpPrefixesUpdateOptionalParams
  ): Promise<IpPrefixesUpdateResponse>;
  /**
   * Implements IP Prefix DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    ipPrefixName: string,
    options?: IpPrefixesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Implements IP Prefix DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    ipPrefixName: string,
    options?: IpPrefixesDeleteOptionalParams
  ): Promise<void>;
}
