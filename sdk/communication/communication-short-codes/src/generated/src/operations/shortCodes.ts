/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ShortCodes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ShortCodesClient } from "../shortCodesClient";
import {
  ShortCode,
  ShortCodesGetShortCodesNextOptionalParams,
  ShortCodesGetShortCodesOptionalParams,
  ShortCodeCost,
  ShortCodesGetCostsNextOptionalParams,
  ShortCodesGetCostsOptionalParams,
  USProgramBrief,
  ShortCodesGetUSProgramBriefsNextOptionalParams,
  ShortCodesGetUSProgramBriefsOptionalParams,
  ProgramBriefAttachment,
  ShortCodesGetUSProgramBriefAttachmentsNextOptionalParams,
  ShortCodesGetUSProgramBriefAttachmentsOptionalParams,
  ShortCodesGetShortCodesResponse,
  ShortCodesGetCostsResponse,
  ShortCodesUpsertUSProgramBriefOptionalParams,
  ShortCodesUpsertUSProgramBriefResponse,
  ShortCodesDeleteUSProgramBriefOptionalParams,
  ShortCodesGetUSProgramBriefOptionalParams,
  ShortCodesGetUSProgramBriefResponse,
  ShortCodesSubmitUSProgramBriefOptionalParams,
  ShortCodesSubmitUSProgramBriefResponse,
  ShortCodesGetUSProgramBriefsResponse,
  AttachmentType,
  FileType,
  ShortCodesCreateOrReplaceUSProgramBriefAttachmentOptionalParams,
  ShortCodesCreateOrReplaceUSProgramBriefAttachmentResponse,
  ShortCodesGetUSProgramBriefAttachmentOptionalParams,
  ShortCodesGetUSProgramBriefAttachmentResponse,
  ShortCodesDeleteUSProgramBriefAttachmentOptionalParams,
  ShortCodesGetUSProgramBriefAttachmentsResponse,
  ShortCodesGetShortCodesNextResponse,
  ShortCodesGetCostsNextResponse,
  ShortCodesGetUSProgramBriefsNextResponse,
  ShortCodesGetUSProgramBriefAttachmentsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ShortCodes operations. */
export class ShortCodesImpl implements ShortCodes {
  private readonly client: ShortCodesClient;

  /**
   * Initialize a new instance of the class ShortCodes class.
   * @param client Reference to the service client
   */
  constructor(client: ShortCodesClient) {
    this.client = client;
  }

  /**
   * Gets the list of short codes for the current resource.
   * @param options The options parameters.
   */
  public listShortCodes(
    options?: ShortCodesGetShortCodesOptionalParams
  ): PagedAsyncIterableIterator<ShortCode> {
    const iter = this.getShortCodesPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getShortCodesPagingPage(options);
      }
    };
  }

  private async *getShortCodesPagingPage(
    options?: ShortCodesGetShortCodesOptionalParams
  ): AsyncIterableIterator<ShortCode[]> {
    let result = await this._getShortCodes(options);
    yield result.shortCodes || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getShortCodesNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.shortCodes || [];
    }
  }

  private async *getShortCodesPagingAll(
    options?: ShortCodesGetShortCodesOptionalParams
  ): AsyncIterableIterator<ShortCode> {
    for await (const page of this.getShortCodesPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This method supports pagination via the "skip" and "top" query parameters.
   * @param options The options parameters.
   */
  public listCosts(
    options?: ShortCodesGetCostsOptionalParams
  ): PagedAsyncIterableIterator<ShortCodeCost> {
    const iter = this.getCostsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getCostsPagingPage(options);
      }
    };
  }

  private async *getCostsPagingPage(
    options?: ShortCodesGetCostsOptionalParams
  ): AsyncIterableIterator<ShortCodeCost[]> {
    let result = await this._getCosts(options);
    yield result.costs || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getCostsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.costs || [];
    }
  }

  private async *getCostsPagingAll(
    options?: ShortCodesGetCostsOptionalParams
  ): AsyncIterableIterator<ShortCodeCost> {
    for await (const page of this.getCostsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the list of US Program Briefs for the current resource.
   * @param options The options parameters.
   */
  public listUSProgramBriefs(
    options?: ShortCodesGetUSProgramBriefsOptionalParams
  ): PagedAsyncIterableIterator<USProgramBrief> {
    const iter = this.getUSProgramBriefsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getUSProgramBriefsPagingPage(options);
      }
    };
  }

  private async *getUSProgramBriefsPagingPage(
    options?: ShortCodesGetUSProgramBriefsOptionalParams
  ): AsyncIterableIterator<USProgramBrief[]> {
    let result = await this._getUSProgramBriefs(options);
    yield result.programBriefs || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getUSProgramBriefsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.programBriefs || [];
    }
  }

  private async *getUSProgramBriefsPagingAll(
    options?: ShortCodesGetUSProgramBriefsOptionalParams
  ): AsyncIterableIterator<USProgramBrief> {
    for await (const page of this.getUSProgramBriefsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the list of attachments from a US Program Brief.
   * @param programBriefId
   * @param options The options parameters.
   */
  public listUSProgramBriefAttachments(
    programBriefId: string,
    options?: ShortCodesGetUSProgramBriefAttachmentsOptionalParams
  ): PagedAsyncIterableIterator<ProgramBriefAttachment> {
    const iter = this.getUSProgramBriefAttachmentsPagingAll(
      programBriefId,
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
        return this.getUSProgramBriefAttachmentsPagingPage(
          programBriefId,
          options
        );
      }
    };
  }

  private async *getUSProgramBriefAttachmentsPagingPage(
    programBriefId: string,
    options?: ShortCodesGetUSProgramBriefAttachmentsOptionalParams
  ): AsyncIterableIterator<ProgramBriefAttachment[]> {
    let result = await this._getUSProgramBriefAttachments(
      programBriefId,
      options
    );
    yield result.attachments || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getUSProgramBriefAttachmentsNext(
        programBriefId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.attachments || [];
    }
  }

  private async *getUSProgramBriefAttachmentsPagingAll(
    programBriefId: string,
    options?: ShortCodesGetUSProgramBriefAttachmentsOptionalParams
  ): AsyncIterableIterator<ProgramBriefAttachment> {
    for await (const page of this.getUSProgramBriefAttachmentsPagingPage(
      programBriefId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the list of short codes for the current resource.
   * @param options The options parameters.
   */
  private async _getShortCodes(
    options?: ShortCodesGetShortCodesOptionalParams
  ): Promise<ShortCodesGetShortCodesResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient._getShortCodes",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getShortCodesOperationSpec
        ) as Promise<ShortCodesGetShortCodesResponse>;
      }
    );
  }

  /**
   * This method supports pagination via the "skip" and "top" query parameters.
   * @param options The options parameters.
   */
  private async _getCosts(
    options?: ShortCodesGetCostsOptionalParams
  ): Promise<ShortCodesGetCostsResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient._getCosts",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getCostsOperationSpec
        ) as Promise<ShortCodesGetCostsResponse>;
      }
    );
  }

  /**
   * Creates or updates a US Program Brief.
   * @param programBriefId Program Brief Id. Must be a valid GUID
   * @param options The options parameters.
   */
  async upsertUSProgramBrief(
    programBriefId: string,
    options?: ShortCodesUpsertUSProgramBriefOptionalParams
  ): Promise<ShortCodesUpsertUSProgramBriefResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient.upsertUSProgramBrief",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { programBriefId, options },
          upsertUSProgramBriefOperationSpec
        ) as Promise<ShortCodesUpsertUSProgramBriefResponse>;
      }
    );
  }

  /**
   * Deletes a US Program Brief.
   * @param programBriefId Program Brief Id. Must be a valid GUID
   * @param options The options parameters.
   */
  async deleteUSProgramBrief(
    programBriefId: string,
    options?: ShortCodesDeleteUSProgramBriefOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "ShortCodesClient.deleteUSProgramBrief",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { programBriefId, options },
          deleteUSProgramBriefOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Get a US Program Brief by id.
   * @param programBriefId Program Brief Id. Must be a valid GUID
   * @param options The options parameters.
   */
  async getUSProgramBrief(
    programBriefId: string,
    options?: ShortCodesGetUSProgramBriefOptionalParams
  ): Promise<ShortCodesGetUSProgramBriefResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient.getUSProgramBrief",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { programBriefId, options },
          getUSProgramBriefOperationSpec
        ) as Promise<ShortCodesGetUSProgramBriefResponse>;
      }
    );
  }

  /**
   * Submits a US Program Brief for review.
   * @param programBriefId Program Brief Id. Must be a valid GUID
   * @param options The options parameters.
   */
  async submitUSProgramBrief(
    programBriefId: string,
    options?: ShortCodesSubmitUSProgramBriefOptionalParams
  ): Promise<ShortCodesSubmitUSProgramBriefResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient.submitUSProgramBrief",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { programBriefId, options },
          submitUSProgramBriefOperationSpec
        ) as Promise<ShortCodesSubmitUSProgramBriefResponse>;
      }
    );
  }

  /**
   * Gets the list of US Program Briefs for the current resource.
   * @param options The options parameters.
   */
  private async _getUSProgramBriefs(
    options?: ShortCodesGetUSProgramBriefsOptionalParams
  ): Promise<ShortCodesGetUSProgramBriefsResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient._getUSProgramBriefs",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getUSProgramBriefsOperationSpec
        ) as Promise<ShortCodesGetUSProgramBriefsResponse>;
      }
    );
  }

  /**
   * Creates or replace an attachment on a US Program Brief.
   * @param programBriefId Program Brief Id. Must be a valid GUID
   * @param attachmentId Attachment Id. Must be a valid GUID
   * @param id Program Brief Attachment Id.
   * @param fileName The name of the file being attached
   *                 e.g. 'myFile01'
   * @param fileType The type of file being attached
   *                 e.g. 'pdf', 'jpg', 'png'
   * @param fileContentBase64 File content as base 64 encoded string
   * @param type Attachment type describing the purpose of the attachment
   *             e.g. 'callToAction', 'termsOfService'
   * @param options The options parameters.
   */
  async createOrReplaceUSProgramBriefAttachment(
    programBriefId: string,
    attachmentId: string,
    id: string,
    fileName: string,
    fileType: FileType,
    fileContentBase64: string,
    type: AttachmentType,
    options?: ShortCodesCreateOrReplaceUSProgramBriefAttachmentOptionalParams
  ): Promise<ShortCodesCreateOrReplaceUSProgramBriefAttachmentResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient.createOrReplaceUSProgramBriefAttachment",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          {
            programBriefId,
            attachmentId,
            id,
            fileName,
            fileType,
            fileContentBase64,
            type,
            options
          },
          createOrReplaceUSProgramBriefAttachmentOperationSpec
        ) as Promise<ShortCodesCreateOrReplaceUSProgramBriefAttachmentResponse>;
      }
    );
  }

  /**
   * Gets a specific an attachment from a US Program Brief.
   * @param programBriefId Program Brief Id. Must be a valid GUID
   * @param attachmentId Attachment Id. Must be a valid GUID
   * @param options The options parameters.
   */
  async getUSProgramBriefAttachment(
    programBriefId: string,
    attachmentId: string,
    options?: ShortCodesGetUSProgramBriefAttachmentOptionalParams
  ): Promise<ShortCodesGetUSProgramBriefAttachmentResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient.getUSProgramBriefAttachment",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { programBriefId, attachmentId, options },
          getUSProgramBriefAttachmentOperationSpec
        ) as Promise<ShortCodesGetUSProgramBriefAttachmentResponse>;
      }
    );
  }

  /**
   * Deletes a specific attachment from a US Program Brief.
   * @param programBriefId Program Brief Id. Must be a valid GUID
   * @param attachmentId Attachment Id. Must be a valid GUID
   * @param options The options parameters.
   */
  async deleteUSProgramBriefAttachment(
    programBriefId: string,
    attachmentId: string,
    options?: ShortCodesDeleteUSProgramBriefAttachmentOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "ShortCodesClient.deleteUSProgramBriefAttachment",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { programBriefId, attachmentId, options },
          deleteUSProgramBriefAttachmentOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Gets the list of attachments from a US Program Brief.
   * @param programBriefId
   * @param options The options parameters.
   */
  private async _getUSProgramBriefAttachments(
    programBriefId: string,
    options?: ShortCodesGetUSProgramBriefAttachmentsOptionalParams
  ): Promise<ShortCodesGetUSProgramBriefAttachmentsResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient._getUSProgramBriefAttachments",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { programBriefId, options },
          getUSProgramBriefAttachmentsOperationSpec
        ) as Promise<ShortCodesGetUSProgramBriefAttachmentsResponse>;
      }
    );
  }

  /**
   * GetShortCodesNext
   * @param nextLink The nextLink from the previous successful call to the GetShortCodes method.
   * @param options The options parameters.
   */
  private async _getShortCodesNext(
    nextLink: string,
    options?: ShortCodesGetShortCodesNextOptionalParams
  ): Promise<ShortCodesGetShortCodesNextResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient._getShortCodesNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { nextLink, options },
          getShortCodesNextOperationSpec
        ) as Promise<ShortCodesGetShortCodesNextResponse>;
      }
    );
  }

  /**
   * GetCostsNext
   * @param nextLink The nextLink from the previous successful call to the GetCosts method.
   * @param options The options parameters.
   */
  private async _getCostsNext(
    nextLink: string,
    options?: ShortCodesGetCostsNextOptionalParams
  ): Promise<ShortCodesGetCostsNextResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient._getCostsNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { nextLink, options },
          getCostsNextOperationSpec
        ) as Promise<ShortCodesGetCostsNextResponse>;
      }
    );
  }

  /**
   * GetUSProgramBriefsNext
   * @param nextLink The nextLink from the previous successful call to the GetUSProgramBriefs method.
   * @param options The options parameters.
   */
  private async _getUSProgramBriefsNext(
    nextLink: string,
    options?: ShortCodesGetUSProgramBriefsNextOptionalParams
  ): Promise<ShortCodesGetUSProgramBriefsNextResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient._getUSProgramBriefsNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { nextLink, options },
          getUSProgramBriefsNextOperationSpec
        ) as Promise<ShortCodesGetUSProgramBriefsNextResponse>;
      }
    );
  }

  /**
   * GetUSProgramBriefAttachmentsNext
   * @param programBriefId
   * @param nextLink The nextLink from the previous successful call to the GetUSProgramBriefAttachments
   *                 method.
   * @param options The options parameters.
   */
  private async _getUSProgramBriefAttachmentsNext(
    programBriefId: string,
    nextLink: string,
    options?: ShortCodesGetUSProgramBriefAttachmentsNextOptionalParams
  ): Promise<ShortCodesGetUSProgramBriefAttachmentsNextResponse> {
    return tracingClient.withSpan(
      "ShortCodesClient._getUSProgramBriefAttachmentsNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { programBriefId, nextLink, options },
          getUSProgramBriefAttachmentsNextOperationSpec
        ) as Promise<ShortCodesGetUSProgramBriefAttachmentsNextResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getShortCodesOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AcquiredShortCodes
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const getCostsOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/costs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ShortCodeCosts
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const upsertUSProgramBriefOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/countries/US/programBriefs/{programBriefId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.USProgramBrief
    },
    201: {
      bodyMapper: Mappers.USProgramBrief
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.programBriefId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteUSProgramBriefOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/countries/US/programBriefs/{programBriefId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.programBriefId],
  headerParameters: [Parameters.accept],
  serializer
};
const getUSProgramBriefOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/countries/US/programBriefs/{programBriefId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.USProgramBrief
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.programBriefId],
  headerParameters: [Parameters.accept],
  serializer
};
const submitUSProgramBriefOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/countries/US/programBriefs/{programBriefId}/:submit",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.USProgramBrief
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.programBriefId],
  headerParameters: [Parameters.accept],
  serializer
};
const getUSProgramBriefsOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/countries/US/programBriefs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.USProgramBriefs
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrReplaceUSProgramBriefAttachmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/shortCodes/countries/US/programBriefs/{programBriefId}/attachments/{attachmentId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProgramBriefAttachment
    },
    201: {
      bodyMapper: Mappers.ProgramBriefAttachment
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: {
      id: ["id"],
      type: ["type"],
      fileName: ["fileName"],
      fileSizeInBytes: ["options", "fileSizeInBytes"],
      fileType: ["fileType"],
      fileContentBase64: ["fileContentBase64"]
    },
    mapper: { ...Mappers.ProgramBriefAttachment, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.programBriefId,
    Parameters.attachmentId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getUSProgramBriefAttachmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/shortCodes/countries/US/programBriefs/{programBriefId}/attachments/{attachmentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProgramBriefAttachment
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.programBriefId,
    Parameters.attachmentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteUSProgramBriefAttachmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/shortCodes/countries/US/programBriefs/{programBriefId}/attachments/{attachmentId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.programBriefId,
    Parameters.attachmentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getUSProgramBriefAttachmentsOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/countries/US/programBriefs/{programBriefId}/attachments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProgramBriefAttachments
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.programBriefId],
  headerParameters: [Parameters.accept],
  serializer
};
const getShortCodesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AcquiredShortCodes
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getCostsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ShortCodeCosts
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getUSProgramBriefsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.USProgramBriefs
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getUSProgramBriefAttachmentsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProgramBriefAttachments
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.programBriefId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
