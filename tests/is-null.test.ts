"use strict";

import { isNull } from "src/is-null";

describe(
    "isNull(payload: unknown): payload is null",
    () =>
    {
        it(
            "should return `true`",
            () =>
            {
                expect(isNull(null))
                    .toBe(true);
            });
    });
