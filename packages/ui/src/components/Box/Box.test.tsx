import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Box } from "./Box";

describe("Box", () => {
  it("should render properly", () => {
    render(<Box as="button">Text</Box>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
