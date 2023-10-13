import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header_Links } from "@/Links/links";

const Header = () => {
  return (
    <div className="bg-[#3d40ce] headerWidth">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with the Image component */}
        <div className="flex items-center">
          <Link href={"/"}>
            {" "}
            <h1 className="text-white cursor-pointer text-2xl font-bold pr-2">
              <Image src="/artist.png" alt="Logo" width={100} height={24} />
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-4">
          {Header_Links.map((item, index) => (
            <Link
              key={index}
              href={item?.path}
              className="text-white cursor-pointer text-2xl font-bold pr-2"
            >
              {item?.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
