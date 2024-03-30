import routes from "@/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathName = usePathname();
  const listYourParking = routes["list-your-parking"];
  const nearByParking = routes["nearby-parking"];
  const about = routes["about"];
  const signUp = routes["signup"];

  return (
    <header className="flex flex-row justify-between px-10 bg-primary overflow-y-hidden">
      <Link href={"/"}>
        <div className="w-[110px] h-[65px] relative">
          <Image
            src={"/assets/images/12.png"}
            alt="logo"
            className="absolute inset-0 w-full h-hull object-cover"
            layout="fill"
          />
        </div>
      </Link>
      <ul className="flex items-center text-white">
        <li className={`${nearByParking === pathName ? "active" : ""}`}>
          <Link href={nearByParking}>Near by Parkings</Link>
        </li>
        <li className={`${listYourParking === pathName ? "active" : ""}`}>
          <Link href={listYourParking}> List your Parking</Link>
        </li>
        <li className={`${about === pathName ? "active" : ""}`}>
          {" "}
          <Link href={about}>About</Link>
        </li>
        <li className={`${signUp === pathName ? "active" : ""}`}>
          {" "}
          <Link href={signUp}>Sign Up</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
