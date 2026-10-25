
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

function renderApp(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

test("Home page is displayed initially", () => {
  renderApp("/");

  expect(
    screen.getByRole("heading", { name: "Home" })
  ).toBeInTheDocument();
});

test("Home page displays a student image", () => {
  renderApp("/");

  expect(
    screen.getByRole("img", { name: /student profile/i })
  ).toBeInTheDocument();
});

test("About page opens using navigation", async () => {
  const user = userEvent.setup();
  renderApp("/");

  await user.click(
    screen.getByRole("link", { name: "About" })
  );

  expect(
    screen.getByRole("heading", { name: /about me/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", { name: /projects/i })
  ).toBeInTheDocument();
});

test("Both navigation links are displayed", () => {
  renderApp("/");

  expect(
    screen.getByRole("link", { name: "Home" })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("link", { name: "About" })
  ).toBeInTheDocument();
});
