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
  id: number;
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: Candidate;
  when_where: string;
  about: About;
  company: string;
  type:string;
  image: string;
}
