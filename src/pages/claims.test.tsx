import { render, screen } from "@testing-library/react";
import Claims from "./claims";

describe("Claims tests", () => {
  render(<Claims />);

  it("should render 'is hero on relesease candidate is rendered'", () => {
    expect(
      screen.getByText("This is hero on relesease candidate")
    ).toBeInTheDocument();
  });
});
