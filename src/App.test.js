import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("Home page is displayed initially", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /home/i })
  ).toBeInTheDocument();
});

test("Home page displays a student image", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(
    screen.getByRole("img", { name: /student/i })
  ).toBeInTheDocument();
});

test("About page opens using navigation", async () => {
  window.history.pushState({}, "", "/");
  const user = userEvent.setup();
  render(<App />);

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
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(
    screen.getByRole("link", { name: /home/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("link", { name: /about/i })
  ).toBeInTheDocument();
});
