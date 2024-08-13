"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

import {
  updateName,
  updateEmail,
  updatePassword,
  updateRole,
} from "@/app/features/auth/authSlice";
import { AppDispatch } from "@/app/store";

import GoogleSignupButton from "@/components/GoogleSignupButton";

const Signup: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: session } = useSession({
    required: false,
  });

  if (session) {
    const { role } = session.user;
    if (role === "unverified") {
      dispatch(updateEmail(session.user.email));
      dispatch(updateRole(session.user.role));
      redirect("/verify");
    }
    if (role === "user") {
      redirect("/");
    }
  }

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const result = await signIn("akil-signup", {
        redirect: false,
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        role: data.role,
      });

      if (!result) throw new Error();
      // TODO: handle error and set errorMessage

      if (!result.ok) {
        // TODO: Handle Error and set Error Message
      } else {
        dispatch(updateEmail(data.email));
        dispatch(updatePassword(data.password));
        dispatch(updateName(data.name));
        dispatch(updateRole(data.role));

        redirect("/verify");
      }
    } catch (err) {
      // TODO : Handle Error and set Error Message
    }
  };

  return (
    <div className="flex items-center justify-center my-8 max-h-screen">
      <div className="bg-white w-full my-0 md:w-2/3 lg:w-1/2 xl:w-1/3 px-8 py-10 md:py-24 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 my-6 text-center">
          Sign Up Today!
        </h2>
        <GoogleSignupButton />
        <div className="relative flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">
            Or Sign Up with Email
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input type="hidden" value="user" {...register("role")} />
          <div className="my-3">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Full name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.name.message?.toString()}
              </p>
            )}
          </div>

          <div className="my-3">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter email address"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && "message" in errors.email && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.email.message?.toString()}
              </p>
            )}
          </div>

          <div className="my-3">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && "message" in errors.password && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.password.message?.toString()}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.confirmPassword.message?.toString()}
              </p>
            )}
          </div>

          <button
            style={{
              backgroundColor: "#4640DE",
            }}
            type="submit"
            className="hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-3xl focus:outline-none focus:shadow-outline w-full"
          >
            Continue
          </button>
        </form>
        <p className="mx-2 my-5 text-md text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            style={{
              color: "#4640DE",
            }}
            className="font-medium text-blue-500 hover:text-blue-700"
          >
            Login
          </Link>
        </p>
        <p className="text-center mt-4 text-sm text-gray-500">
          {`By clicking "Continue", you acknowledge that you have read and
          accepted our  `}
          <a href="#" className="text-customBlue hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            style={{
              color: "#4640DE",
            }}
            className="text-blue-500 hover:underline"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
