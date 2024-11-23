import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options)
  return (
    <header className="bg-blue-400 text-gray-100 px-7 py-4">
      <nav className="w-full flex justify-between items-center">
        <div className="text-3xl">Next Auth Test</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/admin-member">Admin</Link>
          <Link href="/client-member">Client Member</Link>
          <Link href="/server-member">Server Member</Link>
          {/* After signing out the callbackURL is the root directory  */}

          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </nav>
    </header>
  ); 
};

export default Navbar;
