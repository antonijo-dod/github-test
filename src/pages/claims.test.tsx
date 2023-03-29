import { render, screen, fireEvent } from "@testing-library/react";
import Claims from "./claims";

describe("Claims tests", () => {
  it("should open modal on button click", () => {
    render(<Claims />);
    const openButton = screen.getByText("Open modal");
    fireEvent.click(openButton);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
  });

  it("should render 'is hero on relesease candidate is rendered'", () => {
    render(<Claims />);
    expect(
      screen.getByText("This is hero on relesease candidate")
    ).toBeInTheDocument();
  });
});
