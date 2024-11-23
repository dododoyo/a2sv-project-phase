import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const current_path = req.nextUrl.pathname;
    const user_role = req.nextauth.token.role;
    if (current_path.startsWith("/admin-member") && user_role != "admin") {
      return NextResponse.rewrite(new URL("/denied-role", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);
export const config = { matcher: ["/admin-member"] };
