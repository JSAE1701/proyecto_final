import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="p-4 bg-teal-200 rounded-lg max-w-7xl mx-auto shadow md:flex md:items-center md:justify-between md:p-6">
      <Link href="/">Inicio</Link>
      <span className="text-sm sm:text-center">
        © 2022. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
