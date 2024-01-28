"use client";
import React from "react";
import { RecoilRoot } from "recoil";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <RecoilRoot>
      <div>{children}</div>
    </RecoilRoot>
  );
}
