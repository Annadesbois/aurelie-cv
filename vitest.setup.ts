import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend Vitest's expect with jest-dom matchers (e.g. toBeInTheDocument)
expect.extend(matchers);

// Clean up after each test to avoid leaking DOM between tests
afterEach(() => {
  cleanup();
});
