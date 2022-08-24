/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Host,
  HostsListOptionalParams,
  HostsListByResourceGroupOptionalParams,
  HostsCreateOptionalParams,
  HostsCreateResponse,
  HostsGetOptionalParams,
  HostsGetResponse,
  HostsUpdateOptionalParams,
  HostsUpdateResponse,
  HostsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Hosts. */
export interface Hosts {
  /**
   * List of hosts in a subscription.
   * @param options The options parameters.
   */
  list(options?: HostsListOptionalParams): PagedAsyncIterableIterator<Host>;
  /**
   * List of hosts in a resource group.
   * @param resourceGroupName The Resource Group Name.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: HostsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Host>;
  /**
   * Create Or Update host.
   * @param resourceGroupName The Resource Group Name.
   * @param hostName Name of the host.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    hostName: string,
    options?: HostsCreateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<HostsCreateResponse>, HostsCreateResponse>
  >;
  /**
   * Create Or Update host.
   * @param resourceGroupName The Resource Group Name.
   * @param hostName Name of the host.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    hostName: string,
    options?: HostsCreateOptionalParams
  ): Promise<HostsCreateResponse>;
  /**
   * Implements host GET method.
   * @param resourceGroupName The Resource Group Name.
   * @param hostName Name of the host.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostName: string,
    options?: HostsGetOptionalParams
  ): Promise<HostsGetResponse>;
  /**
   * API to update certain properties of the host resource.
   * @param resourceGroupName The Resource Group Name.
   * @param hostName Name of the host.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    hostName: string,
    options?: HostsUpdateOptionalParams
  ): Promise<HostsUpdateResponse>;
  /**
   * Implements host DELETE method.
   * @param resourceGroupName The Resource Group Name.
   * @param hostName Name of the host.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    hostName: string,
    options?: HostsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Implements host DELETE method.
   * @param resourceGroupName The Resource Group Name.
   * @param hostName Name of the host.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    hostName: string,
    options?: HostsDeleteOptionalParams
  ): Promise<void>;
}
