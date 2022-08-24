/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Image,
  ImagesListByDevCenterOptionalParams,
  ImagesListByGalleryOptionalParams,
  ImagesGetOptionalParams,
  ImagesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Images. */
export interface Images {
  /**
   * Lists images for a devcenter.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: ImagesListByDevCenterOptionalParams
  ): PagedAsyncIterableIterator<Image>;
  /**
   * Lists images for a gallery.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param options The options parameters.
   */
  listByGallery(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    options?: ImagesListByGalleryOptionalParams
  ): PagedAsyncIterableIterator<Image>;
  /**
   * Gets a gallery image.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param imageName The name of the image.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    imageName: string,
    options?: ImagesGetOptionalParams
  ): Promise<ImagesGetResponse>;
}
