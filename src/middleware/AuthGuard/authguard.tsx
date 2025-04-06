"use client";
import { useAuth } from "@/context/context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const userId = window.localStorage.getItem("userId");

    if (!user && userId !== "1") {
      router.replace("/auth/login");
      router.refresh();
    }
  }, [user, router]);

  return <>{children}</>;
}
