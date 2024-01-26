import React from "react";
import { Metadata } from "next";
import { SignIn } from "@/components/auth/sign-in";

export const metadata: Metadata = {
  title: "Article app",
  description: "this is blog app",
};

const page = () => {
  return (
    <div className="w-3/5 flex flex-col">
      <h1 className="text-3xl font-bold mb-12 text-left">Login</h1>
      <SignIn />
    </div>
  );
};

export default page;
