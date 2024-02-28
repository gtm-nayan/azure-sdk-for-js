// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { describe, it, assert } from "vitest";
import { calculatePaths } from "../src/recorder.js";

describe("Recorder file paths", () => {
  it("calculates paths for a Mocha test", () => {
    const mochaTest = {
      title: "mocha test title",
      parent: {
        fullTitle: () => "mocha suite title",
      },
    };
    const context = calculatePaths(mochaTest);

    assert.equal(context, {
      suiteTitle: "mocha suite title",
      testTitle: "mocha test title",
    });
  });

  it("calculates paths for a vitest test", () => {
    const vitestTest = () => {
      /* no-op */
    };
    (vitestTest as any).task = {
      name: "vitest test title",
      suite: {
        name: "vitest suite title",
      },
    };

    const context = calculatePaths(vitestTest as any);
    assert.equal(context, {
      suiteTitle: "vitest suite title",
      testTitle: "vitest test title",
    });
  });

  it("calculates paths for a vitest test with nested suites", () => {
    const vitestTest = () => {
      /* no-op */
    };
    (vitestTest as any).task = {
      name: "vitest test title",
      suite: {
        name: "vitest suite title",
        suite: {
          name: "toplevel suite",
        },
      },
    };

    const context = calculatePaths(vitestTest as any);
    assert.equal(context, {
      suiteTitle: "toplevel suite_vitest suite title",
      testTitle: "vitest test title",
    });
  });
});
