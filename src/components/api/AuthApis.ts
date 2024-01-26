"use client";

import axios from "axios";

const SignInApi: any = async (data: any) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,
      {
        data,
      }
    );
  } catch (error) {
    return { message: "Database Error: Failed to Delete Invoice" };
  }
  return true;
};

const SignUpApi: any = async (data: any) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`,
      {
        data,
      }
    );
  } catch (error) {
    return { message: `${error} Database Error: Failed to Delete Invoice1` };
  }
};

export { SignInApi, SignUpApi };
