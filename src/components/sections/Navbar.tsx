"use client";

import Image from "next/image";
import Link from "next/link";
// import siteData from "@/data/siteData";
// import UseAnimations from "react-useanimations";
// import github from "react-useanimations/lib/github";
// import linkedin from "react-useanimations/lib/linkedin";
// import twitter from "react-useanimations/lib/twitter";

const linkItem = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

// const socials = [
//   {
//     name: "Twitter",
//     href: siteData.twitter,
//     animation: twitter,
//   },
//   {
//     name: "LinkedIn",
//     href: siteData.linkedin,
//     animation: linkedin,
//   },
//   {
//     name: "GitHub",
//     href: siteData.github,
//     animation: github,
//   },
// ];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between py-5 sticky top-0 bg-white z-50">
      {/* logo */}
      <Image
        src="/logo-sma-muad.png"
        alt="logo sma muad"
        width={474}
        height={163}
        className="w-1/6 lg:w-1/12"
      />

      {/* link-item */}
      <div className="flex justify-center items-center gap-5">
        {linkItem.map((item, index) => (
          <Link key={index} href={item.link}>
            {item.name}
          </Link>
        ))}
      </div>

      {/* social media */}
      {/* <div className="flex justify-center space-x-6 md:order-2">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="transform  filter hover:contrast-50"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            <UseAnimations animation={item.animation} strokeColor="#333" />
          </a>
        ))}
      </div> */}
    </nav>
  );
}
