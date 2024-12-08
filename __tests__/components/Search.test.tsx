import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Header/Search";
import * as api from "@/lib/search/api";

jest.mock("@/lib/search/api", () => ({
  getSearchedData: jest.fn(),
}));

describe("Search component", () => {
  const getSearchedData = api.getSearchedData as jest.Mock<any, any>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the input field", () => {
    render(<Search />);
    expect(
      screen.getByPlaceholderText("Почніть писати для пошуку..."),
    ).toBeInTheDocument();
  });

  it("updates the input field value when typing", () => {
    render(<Search />);
    const input = screen.getByPlaceholderText("Почніть писати для пошуку...");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });

  it("hides results when input loses focus", async () => {
    const mockResults = [{ type: "article", title: "Test Article", id: "1" }];
    getSearchedData.mockResolvedValue(mockResults);

    render(<Search />);

    const input = screen.getByPlaceholderText("Почніть писати для пошуку...");
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "test" } });

    const article = await screen.findByText("Test Article");
    expect(article).toBeInTheDocument();

    fireEvent.blur(input);

    await waitFor(() => {
      const searchResults = screen.queryByText("Test Article");
      expect(searchResults).toBeNull();
    });
  });

  it("displays no results when API returns an empty array", async () => {
    getSearchedData.mockResolvedValue([]);

    render(<Search />);

    const input = screen.getByPlaceholderText("Почніть писати для пошуку...");
    fireEvent.change(input, { target: { value: "test" } });

    await waitFor(() => {
      expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    });
  });

  it("handles API errors gracefully", async () => {
    getSearchedData.mockRejectedValue(new Error("API Error"));

    render(<Search />);

    const input = screen.getByPlaceholderText("Почніть писати для пошуку...");
    fireEvent.change(input, { target: { value: "test" } });

    await waitFor(() => {
      expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    });
  });
});
