import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { useGetAllBookmarksQuery } from "./services/bookmark";
import { options } from "./api/auth/[...nextauth]/options";
import Navbar from "@/views/Navbar";
import HomePage from "@/views/HomePage";

const Page: React.FC = async () => {
  const session = await getServerSession(options);
  if (session) {
    const { role } = session.user;
    if (role === "unverified") {
      redirect("/verify");
    }
    if (role !== "user") {
      redirect("/login");
    }
  } else {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <HomePage session={session} />
    </>
  );
};

export default Page;
