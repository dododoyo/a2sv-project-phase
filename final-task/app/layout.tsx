import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "./Provider";
import AuthProvider from "@/containers/AuthProvider";

export const metadata: Metadata = {
  title: "Next Auth App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <AuthProvider>
          <body>{children}</body>
        </AuthProvider>
      </ReduxProvider>
    </html>
  );
}

