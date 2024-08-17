// import Page from "../app/unprotected/page";

// describe("Page", () => {
//   it("renders a heading", () => {
//     render(<Page />);

//     const heading = screen.getByRole("heading", { level: 1 });

//     expect(heading).toBeInTheDocument();
//   });
// });

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import  "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import OpportunityCard from "../components/OpportunityCard";
// import { RootState } from "../path-to-your-types/RootState";
import {
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
} from "../app/services/bookmark";

// Mock the API calls
jest.mock("../app/services/bookmark", () => ({
  useAddBookmarkMutation: jest.fn(),
  useDeleteBookmarkMutation: jest.fn(),
}));

const mockStore = configureMockStore<RootState>();

// Define the BookmarkState interface
interface BookmarkState {
  value: any[]; // Adjust the type of the array elements as needed
}

// Define the AuthState interface
interface AuthState {
  value: {
    accessToken: string;
  };
}

// Define the RootState interface
interface RootState {
  bookmarkReducer: BookmarkState;
  authReducer: AuthState;
  // Add other state slices if necessary
}

// Example initialState using the RootState interface
const initialState: RootState = {
  bookmarkReducer: { value: [] },
  authReducer: { value: { accessToken: "test-token" } },
  // Add other initial states if necessary
};
const store = mockStore(initialState);

const mockData = {
  id: "65509e9353a7667de6ef5a60",
  title: "Volunteer Software Development Mentor",
  description:
    "Join A2SV (Africa to Silicon Valley) as a Volunteer Software Development Mentor and make a meaningful impact on the next generation of African tech talent. As a mentor, you will play a crucial role in guiding and supporting aspiring software developers, helping them navigate the world of technology and gain valuable skills. This is an opportunity to contribute to the growth of the African tech ecosystem and foster innovation.",
  responsibilities:
    "Conduct one-on-one or group mentorship sessions with aspiring software developers.\nProvide guidance on coding practices, problem-solving techniques, and industry trends.\nAssist mentees in setting and achieving learning goals.\nOffer constructive feedback on code reviews and project work.\nShare industry insights and experiences to help mentees navigate the software development landscape.\nCollaborate with other mentors and A2SV organizers to enhance the mentorship program.",
  requirements:
    "Proficiency in a variety of programming languages, including but not limited to Java, Python, JavaScript, or others. ",
  idealCandidate:
    "The ideal candidate for the Volunteer Software Development Mentor role at A2SV possesses a blend of technical expertise, mentoring skills, and a passion for contributing to the development of the African tech community.",
  categories: [
    "Education Access and Quality Improvement",
    "Youth Empowerment and Development",
  ],
  opType: "inPerson",
  startDate: "2006-01-02T15:04:05.999Z",
  endDate: "2006-01-02T15:04:05.999Z",
  deadline: "2006-01-02T15:04:05.999Z",
  location: ["Addis Ababa"],
  requiredSkills: ["Accountant"],
  whenAndWhere: "Abrehot Library, Addis Ababa, Ethiopia",
  orgID: "65509e3f53a7667de6ef5a5b",
  datePosted: "2024-07-17T11:09:29.135Z",
  status: "open",
  applicantsCount: 6,
  viewsCount: 12066,
  orgName: "Africa to Silicon Valley",
  logoUrl:
    "https://res.cloudinary.com/dtt1wnvfb/image/upload/v1701954159/photo_2023-12-07%2016.02.23.jpeg.jpg",
  isBookmarked: false,
  isRolling: false,
  questions: null,
  perksAndBenefits: null,
  createdAt: "0001-01-01T00:00:00Z",
  updatedAt: "0001-01-01T00:00:00Z",
  orgPrimaryPhone: "+251987654321",
  orgEmail: "lensa@a2sv.org",
  isPaid: false,
  average_rating: 0,
  total_reviews: 0,
};

// Mock login function
const mockLogin = () => {
  // Simulate setting login state, e.g., setting a token in localStorage or updating Redux state
  localStorage.setItem("accessToken", "mockToken");
};

describe("OpportunityCard Component", () => {
  beforeAll(() => {
    mockLogin();
  });

  beforeEach(() => {
    (useAddBookmarkMutation as jest.Mock).mockReturnValue([
      jest.fn(),
      { isLoading: false },
    ]);
    (useDeleteBookmarkMutation as jest.Mock).mockReturnValue([
      jest.fn(),
      { isLoading: false },
    ]);
  });

  it("should render the OpportunityCard component", () => {
    render(
      <Provider store={store}>
        <OpportunityCard data={mockData} />
      </Provider>
    );

    expect(
      screen.getByText("Volunteer Software Development Mentor")
    ).toBeInTheDocument();
    // expect(screen.getByText("Test Organization")).toBeInTheDocument();
    // expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("should toggle bookmark state when the button is clicked", async () => {
    const addBookmarkMock = jest.fn().mockResolvedValue({ success: true });
    const deleteBookmarkMock = jest.fn().mockResolvedValue({ success: true });

    (useAddBookmarkMutation as jest.Mock).mockReturnValue([
      addBookmarkMock,
      { isLoading: false },
    ]);
    (useDeleteBookmarkMutation as jest.Mock).mockReturnValue([
      deleteBookmarkMock,
      { isLoading: false },
    ]);

    render(
      <Provider store={store}>
        <OpportunityCard data={mockData} />
      </Provider>
    );

    const bookmarkButton = screen.getByRole("button");

    // Initial state: not bookmarked
    expect(bookmarkButton).toBeInTheDocument();
    expect(bookmarkButton.querySelector("svg")).toHaveClass("text-gray-500");

    // Click to add bookmark
    fireEvent.click(bookmarkButton);

    await waitFor(() => {
      expect(addBookmarkMock).toHaveBeenCalled();
      expect(bookmarkButton.querySelector("svg")).toHaveClass("text-blue-500");
    });

    // Click to remove bookmark
    fireEvent.click(bookmarkButton);

    await waitFor(() => {
      expect(deleteBookmarkMock).toHaveBeenCalled();
      expect(bookmarkButton.querySelector("svg")).toHaveClass("text-gray-500");
    });
  });
});