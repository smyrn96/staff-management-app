// /lib/providers.tsx
"use client";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 1, // Retry failed queries once
      refetchOnWindowFocus: true, // Disable refetch on window focus
    },
  },
});

export default queryClient;
