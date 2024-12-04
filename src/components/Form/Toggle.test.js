import { render, screen } from "@testing-library/react";
import Toggle from "./Toggle";
import "@testing-library/jest-dom";

test("initial state is a boolean", () => {
  render(<Toggle />);

  // Validate that the state is a boolean through UI behavior
  const stateType = screen.getByTestId("state-type");
  expect(stateType).toHaveTextContent("Valid Boolean");
});
