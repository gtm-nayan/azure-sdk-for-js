/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SecuritySolution,
  SecuritySolutionsListOptionalParams,
  SecuritySolutionsGetOptionalParams,
  SecuritySolutionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SecuritySolutions. */
export interface SecuritySolutions {
  /**
   * Gets a list of Security Solutions for the subscription.
   * @param options The options parameters.
   */
  list(
    options?: SecuritySolutionsListOptionalParams
  ): PagedAsyncIterableIterator<SecuritySolution>;
  /**
   * Gets a specific Security Solution.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securitySolutionName Name of security solution.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    securitySolutionName: string,
    options?: SecuritySolutionsGetOptionalParams
  ): Promise<SecuritySolutionsGetResponse>;
}
