"use client";

import { usePathname } from "next/navigation";
import { useIsFetching } from "react-query";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";
import { TAppLayout } from "./types";

const AppLayout = ({ children }: TAppLayout) => {
  const pathname = usePathname();

  const isFetching = useIsFetching({
    predicate: (query) => query.queryKey.includes("show-global-loader"),
  }); // global loading indicator

  return (
    <>
      <Header />
      <main className={`min-h-screen bg-white`}>
        {children}
        {!!isFetching && <Loading />}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
