"use client";
import { AppLayout } from "@/layout";
import { montserrat, poppins } from "@/services";
import "./globals.css";
import { Providers } from "@/layout/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${poppins.variable}`}>
        <Providers>
          <AppLayout>{children} </AppLayout>
        </Providers>
      </body>
    </html>
  );
}
