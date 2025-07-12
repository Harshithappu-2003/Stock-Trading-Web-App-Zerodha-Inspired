import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Hero from "../landing_page/home/Hero";

describe("Hero component", () => {
  test("renders hero section with image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute(
      "src",
      expect.stringContaining("media/images/homeHero.png")
    );
  });

  test("renders hero heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(/invest in everything/i);
  });
});
