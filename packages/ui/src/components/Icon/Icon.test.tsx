import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("should render with img role when ariaLabel is passed", () => {
    render(<Icon name="home" ariaLabel="home-icon" />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should render without role when ariaLabel is not passed", () => {
    render(<Icon name="home" data-testid="icon" />);

    expect(screen.queryByTestId("icon")).toBeInTheDocument();
    expect(screen.queryByRole("img")).toBeNull();
  });
});
