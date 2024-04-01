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
  Role,
  RolesListByClusterOptionalParams,
  RolesGetOptionalParams,
  RolesGetResponse,
  RolesCreateOptionalParams,
  RolesCreateResponse,
  RolesDeleteOptionalParams,
  RolesDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Roles. */
export interface Roles {
  /**
   * List all the roles in a given cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: RolesListByClusterOptionalParams,
  ): PagedAsyncIterableIterator<Role>;
  /**
   * Gets information about a cluster role.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param roleName The name of the cluster role.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    roleName: string,
    options?: RolesGetOptionalParams,
  ): Promise<RolesGetResponse>;
  /**
   * Creates a new role or updates an existing role.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param roleName The name of the cluster role.
   * @param parameters The required parameters for creating or updating a role.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    clusterName: string,
    roleName: string,
    parameters: Role,
    options?: RolesCreateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<RolesCreateResponse>, RolesCreateResponse>
  >;
  /**
   * Creates a new role or updates an existing role.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param roleName The name of the cluster role.
   * @param parameters The required parameters for creating or updating a role.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    clusterName: string,
    roleName: string,
    parameters: Role,
    options?: RolesCreateOptionalParams,
  ): Promise<RolesCreateResponse>;
  /**
   * Deletes a cluster role.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param roleName The name of the cluster role.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    roleName: string,
    options?: RolesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<RolesDeleteResponse>, RolesDeleteResponse>
  >;
  /**
   * Deletes a cluster role.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param roleName The name of the cluster role.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    roleName: string,
    options?: RolesDeleteOptionalParams,
  ): Promise<RolesDeleteResponse>;
}
