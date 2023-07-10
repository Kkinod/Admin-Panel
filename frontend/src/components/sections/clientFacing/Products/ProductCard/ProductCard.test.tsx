import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { mockedProductData } from "../../../../../shared/testUtils/mockedData";

describe("ProductCard", () => {
  it("should renders product details", () => {
    render(<ProductCard {...mockedProductData} />);

    expect(screen.getByText(mockedProductData.category)).toBeInTheDocument();
    expect(screen.getByText(mockedProductData.name)).toBeInTheDocument();
    expect(
      screen.getByText(`$${mockedProductData.price.toFixed(2)}`)
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "4 Stars" })).toBeInTheDocument();
    expect(screen.getByText(mockedProductData.description)).toBeInTheDocument();
  });

  it("should expands and shows additional information", () => {
    render(<ProductCard {...mockedProductData} />);

    const seeMoreButton = screen.getByRole("button", { name: "See More" });

    fireEvent.click(seeMoreButton);

    expect(screen.getByText(`id: 123`)).toBeInTheDocument();
    expect(screen.getByText(`Supply Left: 10`)).toBeInTheDocument();
    expect(screen.getByText(`Yearly Sales This Year: 100`)).toBeInTheDocument();
    expect(
      screen.getByText(`Yearly Units Sold This Year: 50`)
    ).toBeInTheDocument();
  });
});
