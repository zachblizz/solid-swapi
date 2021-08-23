import { render, screen } from "solid-testing-library";
// import axios from "axios";
import App from "./App";

// jest.mock("axios");

// before

test("", () => {
  render(() => <App />);
  screen.getByTestId("fooie");
});
