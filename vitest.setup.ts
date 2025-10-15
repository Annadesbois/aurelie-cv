import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { vi } from "vitest";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

vi.mock("@/assets/aurelie.jpg", () => ({
  default: "test-image.jpg",
}));

if (!("scrollTo" in window)) {
  // @ts-expect-error augmenting jsdom window
  window.scrollTo = vi.fn();
} else {
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
}