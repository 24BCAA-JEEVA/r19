
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("Home page is displayed initially", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: /home/i })
  ).toBeInTheDocument();
});

test("Home page displays a student image", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("img", { name: /student/i })
  ).toBeInTheDocument();
});

test("About page opens using navigation", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  await user.click(
    screen.getByRole("link", { name: /about/i })
  );

  expect(
    screen.getByRole("heading", { name: /about me/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", { name: /projects/i })
  ).toBeInTheDocument();
});

test("Both navigation links are displayed", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("link", { name: /home/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("link", { name: /about/i })
  ).toBeInTheDocument();
});
