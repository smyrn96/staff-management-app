// /lib/providers.tsx
"use client";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes cache
      retry: 1, // Retry failed queries once
      refetchOnWindowFocus: false, // Disable refetch on window focus
    },
  },
});

export default queryClient;
