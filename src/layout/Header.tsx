import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-row justify-between px-10 bg-[#75C7FB] overflow-y-hidden">
      <Link href={"/"}>
        <div className="w-[110px] h-[65px] relative">
          <video
            src="/assets/images/9.mp4"
            className="absolute left-0 right-0 bottom-0 !-top-[23px] w-full h-hull object-cover"
            autoPlay={true}
            muted
          ></video>
        </div>
      </Link>
      <ul className="flex gap-x-6 items-center text-white">
        <Link href={"/near-by-parkings"} className="cursor-pointer">
          Near by Parkings
        </Link>
        <Link href={"/list-your-parking"}> List your Parking</Link>
        <Link href={"/about"} className="cursor-pointer">
          About
        </Link>
        <Link href={"/auth/sign-up"} className="cursor-pointer">
          Sign Up
        </Link>
      </ul>
    </header>
  );
};

export default Header;
