import JobPage from "@/app/pages/JobPage";
import { jobs } from "@/public";
interface Params {
  jobId: string;
}
export default function JobDetailPage({ params }: { params: Params }) {
  const data = jobs.find((job) => String(job.id) === params.jobId);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-8xl">Job not found</h1>
      </div>
    );
  }

  return (
    <JobPage data={data}/>
  );
}