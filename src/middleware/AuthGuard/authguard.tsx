"use client";
import { useAuth } from "@/context/context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!user) {
      router.push("/auth/login");
    }
  }, [user, router]);

  if (!isClient) {
    return null;
  }

  return children;
}
