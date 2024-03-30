"use client";
import { usePathname } from "next/navigation";
import { useIsFetching } from "react-query";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";
import { TAppLayout } from "./types";
import { ChakraProvider } from "@chakra-ui/react";

const AppLayout = ({ children }: TAppLayout) => {
  const pathname = usePathname();

  const isFetching = useIsFetching({
    predicate: (query) => query.queryKey.includes("show-global-loader"),
  }); // global loading indicator

  return (
    <ChakraProvider>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex flex-grow w-full">
          {children}
          {!!isFetching && <Loading />}
        </main>
        {/* <Footer /> */}
      </div>
    </ChakraProvider>
  );
};

export default AppLayout;
