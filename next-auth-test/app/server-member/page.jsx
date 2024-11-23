import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";
const page = async () => {
  const session = await getServerSession(options);

  if (!session){
    redirect("/api/auth/signin?callbackUrl=/server-member")
  }
  return (
    <div>
      <h1 className="flex mx-auto">Server Member</h1>
      <p>{session.user.email}</p>
      <p>{session.user.role}</p>
    </div>
  );
};

export default page;
