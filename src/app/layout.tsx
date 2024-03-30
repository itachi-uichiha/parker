"use client";
import { AppLayout } from "@/layout";
import { montserrat, poppins } from "@/services";
import "./globals.css";
import { Providers } from "@/layout/Providers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${poppins.variable}`}>
        <Providers>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <AppLayout>{children} </AppLayout>
        </Providers>
      </body>
    </html>
  );
}
