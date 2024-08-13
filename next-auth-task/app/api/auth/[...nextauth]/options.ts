import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"; // Corrected import
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import { User } from "next-auth";

const GOOGLE_ID = process.env.GOOGLE_ID;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET;

if (!GOOGLE_ID) throw Error("GOOGLE_ID is undefined");
if (!GOOGLE_SECRET) throw Error("GOOGLE_SECRET is undefined");

const Google = GoogleProvider({
  profile(profile) {
    let userRole = "user";
    try {
      return {
        ...profile,
        id: profile.sub,
        role: userRole,
      };
    } catch (error) {
      return {
        id: "",
        role: userRole,
        aud: "",
        azp: "",
        email: "",
        email_verified: false,
        exp: 0,
        family_name: "",
        given_name: "",
        hd: "",
        iat: 0,
        iss: "",
        jti: "",
        name: "",
        nbf: 0,
        picture: "",
        sub: "",
      } as User;
    }
  },
  clientId: GOOGLE_ID,
  clientSecret: GOOGLE_SECRET,
});

const AkilLogin = CredentialsProvider({
  id: "akil-login",
  name: "Akil Login",
  credentials: {
    email: { label: "email", type: "text" },
    password: { label: "password", type: "password" },
  },
  async authorize(credentials) {
    if (!credentials) {
      throw new Error("Credentials are undefined");
    }

    const { email, password } = credentials;
    const userData = { email, password };
    const result = await fetch(`${process.env.SERVER_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (result.status === 200) {
      const data = await result.json();
      const { email, id, name, role } = data.data;
      return { email: email, id: id, name: name, role: role };
    } else {
      const data = await result.json();
      // console.log(data);
      if (data.message) {
        const errorMessage = data.message;
        if (
          errorMessage.startsWith(
            "Email has not been verified yet. OTP sent to"
          )
        ) {
          return { email: email, name: null, role: "unverified", id: 1 };
        }
      }
      return null;
    }
  },
});
const AkilVerify = CredentialsProvider({
  id: "verify",
  name: "Akil Verify",
  credentials: {
    email: { label: "email", type: "text" },
    otp: { label: "OTP", type: "text" },
  },
  async authorize(credentials) {
    if (!credentials) {
      throw new Error("Credentials are undefined");
    }

    const { email, otp } = credentials;
    const userData = { email, otp };
    const result = await fetch(`${process.env.SERVER_URL}/verify-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (result.status === 200) {
      const data = await result.json();
      const { email, id, name, role } = data.data;
      return { email: email, id: id, name: name, role: role };
    }
    return null;
  },
});

const AkilSignup = CredentialsProvider({
  id: "akil-signup",
  name: "Akil Signup",
  credentials: {
    name: { label: "name", type: "text" },
    email: { label: "email", type: "text" },
    password: { label: "password", type: "password" },
    confirmPassword: { label: "confirmPassword", type: "password" },
    role: { label: "role", type: "text" },
  },
  async authorize(credentials) {
    if (!credentials) {
      throw new Error("Credentials are undefined");
    }
    const { name, email, password, confirmPassword, role } = credentials;
    const userData = { email, password, name, confirmPassword, role };
    console.log(process.env.SERVER_URL);
    const result = await fetch(`${process.env.SERVER_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (result.status === 200) {
      const data = await result.json();
      if (data.message === "Successfully sent OTP") {
        return { email: email, id: 1, name: null, role: "unverified" };
      } else {
        const { email, id, name, role } = data.data;
        return { email: email, id: id, name: name, role: role };
      }
    } else {
      return null;
    }
  },
});

export const options = {
  providers: [Google, AkilLogin, AkilSignup, AkilVerify],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
};
