"use client";
import { AppLayout } from "@/layout";
import { inter, lora, queryClient, sourceCodePro400 } from "@/services";
import { QueryClientProvider } from "react-query";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourceCodePro400.className}>
        <QueryClientProvider client={queryClient}>
          <AppLayout>{children}</AppLayout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
