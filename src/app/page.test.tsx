import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("Home", () => {
  test("Should render the page", () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
  test("Should render the page title", () => {
    render(<Home />);
    expect(screen.getByText("OMDB Movie Search")).toBeInTheDocument();
  });
  test("Should render the search input", () => {
    render(<Home />);
    expect(
      screen.getByPlaceholderText("Input at least 3 characters")
    ).toBeInTheDocument();
  });
  test("Should render the search button", () => {
    render(<Home />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
