import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// import Page from "../app/unprotected/page";
// describe("Page", () => {
//   it("renders a heading", () => {
//     render(<Page />);
//     const heading = screen.getByRole("heading", { level: 1 });
//     expect(heading).toBeInTheDocument();
//   });
// });

import { ReduxProvider } from "@/app/Provider";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import OpportunityCard from "../components/OpportunityCard";
import {
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
} from "../app/services/bookmark";
import { RootState } from "../app/store"; // Adjust import based on your store setup

// Create a mock store
const middlewares = [thunk];
const mockStore = configureMockStore<RootState>(middlewares);

// Mock the API calls
jest.mock("../app/services/bookmark", () => ({
  useAddBookmarkMutation: jest.fn(),
  useDeleteBookmarkMutation: jest.fn(),
}));

const mockData = {
  id: "65509e9353a7667de6ef5a60",
  title: "Volunteer Software Development Mentor",
  description:
    "Join A2SV (Africa to Silicon Valley) as a Volunteer Software Development Mentor and make a meaningful impact...",
  location: ["Addis Ababa"],
  opType: "inPerson",
  orgName: "Africa to Silicon Valley",
  logoUrl:
    "https://res.cloudinary.com/dtt1wnvfb/image/upload/v1701954159/photo_2023-12-07%2016.02.23.jpeg.jpg",
  categories: [
    "Education Access and Quality Improvement",
    "Youth Empowerment and Development",
  ],
};

// Create a mock store instance
const initialState: RootState = {
  bookmarkReducer: { value: [] },
  authReducer: {
    value: {
      name: "",
      email: "",
      password: "",
      role: "",
      accessToken: "",
      errorMessage: "",
      isLoading: false,
      otp: ["", "", "", ""],
      timeLeft: 30,
    },
  },
};
const store = mockStore(initialState);

describe("OpportunityCard Component", () => {
  const addBookmarkMock = jest.fn().mockResolvedValue({ success: true });
  const deleteBookmarkMock = jest.fn().mockResolvedValue({ success: true });

  beforeEach(() => {
    (useAddBookmarkMutation as jest.Mock).mockReturnValue([
      addBookmarkMock,
      { isLoading: false },
    ]);
    (useDeleteBookmarkMutation as jest.Mock).mockReturnValue([
      deleteBookmarkMock,
      { isLoading: false },
    ]);
  });

  it("should render the OpportunityCard component", () => {
    render(
      <ReduxProvider>
        <OpportunityCard data={mockData} />
      </ReduxProvider>
    );

    expect(
      screen.getByText("Volunteer Software Development Mentor")
    ).toBeInTheDocument();
    expect(screen.getByText("Africa to Silicon Valley")).toBeInTheDocument();
  });

  it("should toggle bookmark state when the button is clicked", async () => {
    render(
      <Provider store={store}>
        <OpportunityCard data={mockData} />
      </Provider>
    );

    const bookmarkButton = screen.getByRole("button");

    // Initially, the opportunity should not be bookmarked
    expect(bookmarkButton.querySelector("svg")).toHaveClass("text-gray-500");

    // Click to add bookmark
    fireEvent.click(bookmarkButton);
    await waitFor(() => {
      expect(addBookmarkMock).toHaveBeenCalledWith({
        id: mockData.id,
        accessToken: "mock-token",
      });
      expect(bookmarkButton.querySelector("svg")).toHaveClass("text-blue-500");
    });

    // Click to remove bookmark
    fireEvent.click(bookmarkButton);
    await waitFor(() => {
      expect(deleteBookmarkMock).toHaveBeenCalledWith({
        id: mockData.id,
        accessToken: "mock-token",
      });
      expect(bookmarkButton.querySelector("svg")).toHaveClass("text-gray-500");
    });
  });
});
