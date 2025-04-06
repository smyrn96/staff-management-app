"use client";

import { useAuth } from "@/context/context";
import { redirect } from "next/navigation";

export default function Home() {
  const { user } = useAuth();

  if (user) {
    redirect("/dashboard");
  } else {
    redirect("/auth/login");
  }
}
