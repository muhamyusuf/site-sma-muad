import { cn } from "@/lib/utils";
import Image from "next/image";
import { buttonVariants } from "../ui/button";

const linkItem = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

const socialLinks = [
  { name: "Instagram", link: "/" },
  { name: "Facebook", link: "/about" },
  { name: "Youtube", link: "/blog" },
  { name: "Twitter", link: "/contact" },
  { name: "LinkedIn", link: "/contact" },
];

export default function Footer() {
  return (
    <footer className="py-5">
      <div className="border-y w-full min-h-[100px] rounded-md flex py-5">
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
          {/* Logo */}
          <div className="w-1/6">
            <Image
              src="/logo-sma-muad.png"
              alt="logo sma muad"
              width={474}
              height={163}
            />
          </div>

          {/* Socials */}
          <div>
            <p className="font-bold text-[16px]">Social Media Platform</p>

            <div className="flex flex-col gap-2 mt-5">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-black hover:underline hover:underline-offset-2 hover:text-orangePrimary ease-in-out"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Link Navigate */}
          <div>
            <p className="font-bold text-[16px]">Link Navigate</p>

            <div className="flex flex-col gap-2 mt-5">
              {linkItem.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-black hover:underline hover:underline-offset-2 hover:text-orangePrimary ease-in-out"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="font-bold text-[16px]">Location</p>

            <p>
              Margodadi, Metro Selatan, Metro City <br /> Lampung 34122
            </p>
            <a
              href="https://maps.app.goo.gl/d3cLiBEYfPsd7pVV6"
              className={cn(
                buttonVariants({ variant: "default" }),
                "mt-5 bg-blueAccent hover:bg-blueAccent/80 ease-in-out duration-300"
              )}
            >
              View On G-Map &rarr;
            </a>
          </div>
        </div>

        {/* Contact Form */}
      </div>

      <p className="text-center opacity-70 text-[14px] mt-5">
        © 2024 Official SMA Muhammadiyah Ahmad Dahlan.
        <br className="md:hidden" /> All rights reserved.
      </p>
    </footer>
  );
}
