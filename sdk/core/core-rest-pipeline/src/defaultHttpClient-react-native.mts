// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import type { HttpClient } from "./interfaces.js";
import { createXhrHttpClient } from "./clients/xhrHttpClient-browser.mjs";

/**
 * Create the correct HttpClient for the current environment.
 */
export function createDefaultHttpClient(): HttpClient {
  return createXhrHttpClient();
}
