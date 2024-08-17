export interface authValue {
  name: string | null;
  email: string | null;
  password: string | null;
  role: string | null;
  accessToken: string;
  errorMessage: string | null;
  isLoading: boolean;
  otp: string[];
  timeLeft: number;
}

export interface authDefaultState {
  value: authValue;
}

export interface OpportunityCardProps {
  data: Opportunity;
}
export interface Opportunity {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string[] | null;
  perksAndBenefits: string[] | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
}

interface About {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}
interface Candidate {
  age: string;
  gender: string;
  traits: string[];
}
export interface JobCardProps {
  data: JobData;
}
export interface JobData {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string | null;
  perksAndBenefits: string | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  orgWebsite: string;
  isPaid: boolean;
  average_rating: number;
  total_reviews: number;
}

export interface Bookmark {
  dateBookmarked: string;
  datePosted: string;
  eventID: string;
  location: string;
  logoUrl: string;
  opType: "inPerson" | "virtual";
  orgName: string;
  title: string;
}
export interface defaultBookmarkValue {
  value: Bookmark[];
}

export interface BookmarkCardProps {
  data: Bookmark;
}

export interface opportunityDefaultState {
  value: Opportunity[];
}

export interface searchValue {
  query: string;
}
