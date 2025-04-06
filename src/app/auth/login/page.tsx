"use client";

import Login from "@/components/Forms/LoginForm/login";
import { useAuth } from "@/context/context";
import { UserCredentials } from "@/types";
import { FormikHelpers } from "formik";
import { useState } from "react";

const initialValues: UserCredentials = { email: "", password: "" };

export default function Home() {
  const { login } = useAuth();
  const [isInvalidCred, setIsInvalidCred] = useState(false);
  const handleLogin = async (
    values: UserCredentials,
    { setSubmitting }: FormikHelpers<UserCredentials>
  ) => {
    try {
      const { email, password } = values;
      await login(email, password);
      setIsInvalidCred(false);
    } catch (error) {
      console.log(error);
      setIsInvalidCred(true);
      console.error("Login failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-wrapper w-full h-full flex flex-column justify-center items-center">
      <Login
        initialValues={initialValues}
        handleLogin={handleLogin}
        isInvalidCred={isInvalidCred}
      ></Login>
    </div>
  );
}
