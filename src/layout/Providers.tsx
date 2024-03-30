"use client";

import { queryClient } from "@/services";
import { ChakraProvider } from "@chakra-ui/react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { QueryClientProvider } from "react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "";
  return (
    <ChakraProvider>
      {" "}
      <APIProvider apiKey={API_KEY}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </APIProvider>
    </ChakraProvider>
  );
}
