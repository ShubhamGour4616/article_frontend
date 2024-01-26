import { SignUp } from "@/components/auth/sign-up";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article app",
  description: "this is blog app",
};

const page = () => {
  return (
    <div className="w-3/5 flex flex-col">
      <h1 className="text-3xl font-bold mb-12 text-left">Create an Account</h1>
      <SignUp />
    </div>
  );
};

export default page;
