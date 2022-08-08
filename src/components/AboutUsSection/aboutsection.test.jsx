import { render, screen } from "@testing-library/react";
import { AboutUsSection } from ".";

test("renders", () => {
  render(<AboutUsSection />);
  const tagline = screen.getText(/We create the perfect tech Experience/i);
  expect(tagline).toBeInTheDocument();
});
