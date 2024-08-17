"use client";
import React, { useEffect, useRef } from "react";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { signIn, useSession } from "next-auth/react";

import { AppDispatch, useAppSelector } from "@/app/store";
import {
  updatePassword,
  updateOtp,
  updateTimeLeft,
  updateErrorMessage,
} from "@/app/features/auth/authSlice";

const VerifyEmail: React.FC = () => {
  const otp = useAppSelector((state) => state.authReducer.value.otp);
  const errorMessage = useAppSelector(
    (state) => state.authReducer.value.errorMessage
  );
  const timeLeft = useAppSelector((state) => state.authReducer.value.timeLeft);

  const inputRefs = useRef<HTMLInputElement[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const email = useAppSelector((state) => state.authReducer.value.email);
  const name = useAppSelector((state) => state.authReducer.value.name);
  const role = useAppSelector((state) => state.authReducer.value.role);
  const password = useAppSelector((state) => state.authReducer.value.password);

  const { data: session } = useSession({
    required: false,
  });
  if (!session) {
    redirect("/signup");
  }

  if (session) {
    const { role } = session.user;
    if (role === "user") {
      redirect("/");
    }
  }

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    dispatch(updateOtp(newOtp));
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleContinue = async () => {
    try {
      const otpData = otp.join("");
      if (email && otpData) {
        const result = await signIn("verify", {
          redirect: false,
          email: email,
          otp: otpData,
        });
        if (!result) {
          dispatch(
            updateErrorMessage("Verification failed. Please try again.")
          );
        } else if (!result.ok) {
          dispatch(
            updateErrorMessage("Verification failed. Invalid Credentials.")
          );
        } else {
          dispatch(updateErrorMessage(""));
          dispatch(updatePassword(""));
        }
      } else {
        dispatch(updateErrorMessage("An error occurred. Login again."));
      }
    } catch (err) {
      dispatch(updateErrorMessage("An error occurred. Please try again."));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = async () => {
    try {
      const result = await signIn("signup", {
        redirect: false,
        name: name,
        email: email,
        password: password,
        confirmPassword: password,
        role: role,
      });

      if (!result || !result.ok) {
        dispatch(updateErrorMessage("Verification failed. Please try again."));
      } else {
        dispatch(updateTimeLeft(30));
        dispatch(updateErrorMessage(""));
      }
    } catch (err) {
      dispatch(updateErrorMessage("Verification failed. Please try again."));
    }
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (timeLeft > 0) {
      timerId = setTimeout(() => dispatch(updateTimeLeft(timeLeft - 1)), 1000);
    }
    return () => clearTimeout(timerId);
  }, [timeLeft, dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-8 py-12 md:py-24 rounded-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Verify Email
        </h2>
        <p className="text-gray-500 text-sm mb-4 text-center">
          {`We've sent a verification code to the email address you provided. To complete the verification process, please enter the code here.`}
        </p>
        {errorMessage !== null && (
          <p className="text-red-500 text-lg mb-4 text-center">
            {errorMessage}
          </p>
        )}
        <div className="flex justify-center space-x-4 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="w-12 h-12 text-center border bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-2xl  text-purple-300"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => {
                inputRefs.current[index] = el!;
              }}
            />
          ))}
        </div>
        <p className="text-gray-600 text-sm text-center ">
          You can request to{" "}
          <button
            style={{
              color: "#4640DE",
            }}
            className="cursor-pointer font-semibold"
            onClick={handleResend}
            disabled={timeLeft > 0 || errorMessage === null}
          >
            Resend code
          </button>{" "}
          in
        </p>
        <p
          style={{
            color: "#4640DE",
          }}
          className="text-center mt-1 mb-6 text-md"
        >
          {`0:${timeLeft.toString().padStart(2, "0")}`}
        </p>
        <button
          onClick={handleContinue}
          disabled={otp.join("").length !== 4}
          className={`${
            otp.join("").length !== 4 ? `bg-blue-400` : `bg-customBlue`
          } text-white font-bold py-3 px-6 rounded-3xl focus:outline-none focus:shadow-outline w-full z-10`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
