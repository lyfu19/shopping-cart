import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ProductCard from "./ProductCard";
import userEvent from "@testing-library/user-event";

describe("ProductCard component", () => {
  const fakeProduct = {
    id: 1,
    title: "Test Product",
    price: 9.99,
    image: "https://via.placeholder.com/150",
  };

  it("renders product title, price and image", () => {
    render(<ProductCard product={fakeProduct} addToCart={() => {}} />);

    expect(screen.getByText(/test product/i)).toBeInTheDocument();
    expect(screen.getByText("$9.99")).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", fakeProduct.image);
    expect(image).toHaveAttribute("alt", fakeProduct.title);
  });

  it("increases and decreases quantity", async () => {
    const user = userEvent.setup();
    render(<ProductCard product={fakeProduct} addToCart={() => {}} />);
    const input = screen.getByRole("spinbutton");
    const plus = screen.getByText("+");
    const minus = screen.getByText("-");

    expect(input.value).toBe("1");
    await user.click(plus);
    expect(input.value).toBe("2");
    await user.click(minus);
    expect(input.value).toBe("1");
    await user.click(minus);
    expect(input.value).toBe("1");
  });

  it("calls addToCart with correct arguments", async () => {
    const user = userEvent.setup();
    const mockAddToCart = vi.fn();
    render(<ProductCard product={fakeProduct} addToCart={mockAddToCart} />);
    const addButton = screen.getByRole("button", { name: /add to cart/i });
    await user.click(addButton);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(fakeProduct, 1);
  });

  it("shows '✔ Added to cart!' message after clicking add", async () => {
    const user = userEvent.setup();
    render(<ProductCard product={fakeProduct} addToCart={() => {}} />);
    const addButton = screen.getByRole("button", { name: /add to cart/i });
    await user.click(addButton);
    const successMsg = screen.getByText(/✔ added to cart/i);
    expect(successMsg).toBeVisible();
  });
});
