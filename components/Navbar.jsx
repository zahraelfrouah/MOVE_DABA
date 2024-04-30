"use client";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { usePathname } from "next/navigation";
import { getCookie } from "cookies-next";

function Navbar() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const pathName = usePathname();
  const token = getCookie("access_token");

  const links = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Partenariat", href: "/partnership" },
    { name: "Biens endommagés", href: "/broken-items" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="container mx-auto ">
      <header className=" inset-x-0 top-0 z-50 py-6">
        <div className="mx-auto hidden lg:block lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-0">
          <nav className="w-full flex justify-between  ">
            <div className="min-w-max inline-flex">
              <Link href="/" className=" flex items-center">
                <Image
                  src="/logolight.png"
                  alt="logo"
                  height={35}
                  width={176}
                />
              </Link>
            </div>

            <div className="fixed hidden inset-0 lg:!hidden"></div>
            <div className="flex invisible opacity-0  translate-y-10 overflow-hidden lg:visible lg:opacity-100  lg:-translate-y-0 lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6  lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-white lg:!bg-transparent border-x border-x-gray-100 lg:border-x-0 ">
              <ul className="relative w-full rounded-full bg-gradient-to-r from-[#0000007e] to-[#4a4a4a2a] bg-opacity-30 overflow-hidden xl:px-2 px-1  py-2 flex  text-lg text-white justify-between items-center mx-14 xl:mx-20">
                <div className="absolute inset-0 backdrop-filter backdrop-blur-lg blur opacity-50" />
                {links?.map((link) => (
                  <li key={link?.href}>
                    <Link
                      href={link.href}
                      className={`duration-300 text-xs  xl:text-base relative font-medium ease-linear ${
                        pathName === link.href && "bg-[#4A4A4A]"
                      } hover:bg-[#4A4A4A] rounded-full h-10 px-4 py-2 flex items-center justify-center`}
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="  lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-100   lg:border-0 px-6 lg:px-0">
                {token && currentUser ? (
                  <Link
                    href="/client"
                    className="flex items-center gap-2 bg-white rounded-full p-1 text-[#363636] "
                  >
                    <img
                      src={currentUser?.profilePicture}
                      className="w-10 h-10 rounded-full "
                      alt=""
                    />
                    <span className="  relative z-10 font-bold capitalize pr-1">
                      {currentUser?.username &&
                        currentUser.username.substring(0, 7)}
                      .
                    </span>
                  </Link>
                ) : (
                  <Link
                    href="/sign-in"
                    className=" flex justify-center items-center  sm:w-max px-6 h-12 outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0 bg-[#94DA21] hover:bg-transparent hover:after:opacity-100 hover:after:scale-[2.5]  border-transparent hover:border-[#94DA21]
                    rounded-full "
                  >
                    <span className=" w-[100px] text-center relative z-10 text-white">
                      Connexion
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
        <ResponsiveNavbar links={links} currentUser={currentUser} />
      </header>
    </div>
  );
}

export default Navbar;
