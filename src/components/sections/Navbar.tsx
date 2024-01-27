import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";

const linkItem = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog/News", link: "https://blog-sma-muad.vercel.app" },
  { name: "Career", link: "/career" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-5 sticky top-0 bg-white dark:bg-[#0d0d0d] z-50">
      {/* logo */}
      <Link href="/" className="w-1/4 lg:w-1/12">
        <Image
          src="/sma-muad-logo.png"
          alt="sma muad logo"
          width={474}
          height={163}
        />
      </Link>

      {/* link-item */}
      <div className="justify-center items-center gap-5 hidden md:flex">
        {linkItem.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="hover:text-orangePrimary duration-200 ease-in-out"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Nav */}
      <Sheet>
        <SheetTrigger asChild className="block md:hidden border-none">
          <Button variant="outline" className="py-1 px-2">
            <AlignRight className="text-lg" />
          </Button>
        </SheetTrigger>

        <SheetContent className="md:hidden">
          <SheetHeader className="flex">
            <Link href="/" className="w-1/3 mt-10 lg:w-1/12 self-end">
              <Image
                src="/sma-muad-logo.png"
                alt="sma muad logo"
                width={474}
                height={163}
              />
            </Link>
          </SheetHeader>

          <div className="justify-center items-end w-full gap-5 flex flex-col mt-5">
            {linkItem.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="hover:text-orangePrimary duration-200 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
