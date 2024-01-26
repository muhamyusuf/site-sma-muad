import { cn } from "@/lib/utils";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import {
  BiLogoInstagramAlt,
  BiLogoFacebookSquare,
  BiLogoYoutube,
  BiLogoGmail,
} from "react-icons/bi";
import Link from "next/link";
import FormAndContact from "@/components/FormAndContact";

const linkItem = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog/News", link: "https://blog-sma-muad.vercel.app" },
  { name: "Career", link: "/career" },
];

const socialLinks = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/officialsmamuad",
    icon: <BiLogoInstagramAlt />,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/smamuadmetro",
    icon: <BiLogoFacebookSquare />,
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCXOIn0VoiyJxtNk5yfxBY-Q",
    icon: <BiLogoYoutube />,
  },
  {
    name: "Email",
    link: "mailto:officialsmamuad@sch.id",
    icon: <BiLogoGmail />,
  },
];

export default function Footer() {
  return (
    <footer className="py-5 bg-white dark:bg-[#0d0d0d]">
      <div className="border-y w-full min-h-[100px] flex flex-col py-5">
        <div className="w-full flex flex-col flex-wrap md:flex-row gap-10 md:gap-0 justify-between">
          {/* Logo */}
          <div className="w-1/6">
            <Image
              src="/sma-muad-logo.png"
              alt="sma muad logo"
              width={474}
              height={163}
            />
          </div>

          {/* Socials */}
          <div>
            <p className="font-bold text-[16px]">Social & Contact</p>

            <div className="flex items-center gap-2 mt-5">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-black hover:underline hover:underline-offset-2 hover:text-orangePrimary ease-in-out border p-2 rounded-full hover:border-orangePrimary"
                >
                  <div className="text-2xl">{item.icon}</div>
                </a>
              ))}
            </div>

            <div className="relative flex justify-center items-center text-xs uppercase mt-2">
              <span className="w-full h-[1px] bg-black"></span>
              <span className="px-2 text-muted-foreground">or</span>
              <span className="w-full h-[1px] bg-black"></span>
            </div>

            <div className="flex flex-col -space-y-1 text-sm mt-2">
              <p className="text-black">Phone: +62 721 701 010</p>
              <p className="text-black">Fax: +62 721 701 010</p>
            </div>
          </div>

          {/* Link Navigate */}
          <div>
            <p className="font-bold text-[16px]">Link Navigate</p>

            <div className="flex flex-col gap-2 mt-5">
              {linkItem.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-black hover:underline hover:underline-offset-2 hover:text-orangePrimary ease-in-out"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="font-bold text-[16px]">Location</p>

            <div className="flex flex-col gap-2 mt-5">
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
        </div>

        {/* Contact Form */}
        {/* <div className="mx-auto mt-20"><FormAndContact /></div> */}
      </div>

      <p className="text-center opacity-70 text-[14px] mt-5">
        © 2024 Official SMA Muhammadiyah Ahmad Dahlan.
        <br className="md:hidden" /> All rights reserved.
      </p>
    </footer>
  );
}
