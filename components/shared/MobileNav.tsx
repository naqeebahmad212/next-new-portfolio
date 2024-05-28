"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { mainLinks } from "@/constant";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import logo from "@/public/images/logo.png";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="bg-dark-2 sticky top-0 z-[999] p-4 lg:hidden flex items-center justify-between ">
      <Link
        href="/"
        className={`text-primary-500 text-heading3-semibold flex items-center gap-2 ${bebas.className}`}
      >
        <Image src={logo} alt="logo" width={20} height={20} />
        Leye
      </Link>
      <nav className="">
        <Sheet>
          <SheetTrigger className="text-white">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left" className="bg-dark-2">
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {mainLinks.map((item) => {
                    const isActive =
                      pathname === item.link ||
                      pathname.startsWith(`${item.link}/`);
                    return (
                      <SheetClose asChild key={item.name}>
                        <Link
                          key={item.link}
                          href={item.link}
                          className={cn(
                            "mobilenav-sheet_close w-full p-[6px] hover:bg-primary-500 text-start rounded-lg  transition-all duration-500 origin-left",
                            {
                              "bg-primary-500": isActive,
                            }
                          )}
                        >
                          <p
                            className={cn(
                              "text-16 font-semibold text-black-2",
                              {
                                "!text-white": isActive,
                              }
                            )}
                          >
                            {item.name}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}

                  <SheetClose asChild>
                    <Link href="/contact" className="">
                      <button className="cssbuttons-io-button w-full">
                        Book A Call
                        <div className="icon">
                          <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </Link>
                  </SheetClose>
                  {/* user */}
                </nav>
              </SheetClose>
              {/* <Footer user={user} type="mobile" /> */}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;
