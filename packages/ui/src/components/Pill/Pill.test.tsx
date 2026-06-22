import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Pill } from "./Pill";

describe("Pill", () => {
  it("should render as non-interactive when onClick is not passed", () => {
    render(<Pill label="Pill" />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should render as button and toggle in uncontrolled mode", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<Pill label="Pill" onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Pill" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-pressed", "false");

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveAttribute("aria-pressed", "true");
  });

  it("should respect controlled mode and not toggle internal state on click", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    const { rerender } = render(
      <Pill label="Pill" isActive={false} onClick={onClick} />,
    );

    const button = screen.getByRole("button", { name: "Pill" });

    expect(button).toHaveAttribute("aria-pressed", "false");

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveAttribute("aria-pressed", "false");

    rerender(<Pill label="Pill" isActive onClick={onClick} />);

    expect(button).toHaveAttribute("aria-pressed", "true");
  });
});
