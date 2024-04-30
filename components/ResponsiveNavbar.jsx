"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getCookie } from "cookies-next";

const ResponsiveNavbar = ({ links, currentUser }) => {
  const [showModal, setShowModal] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (showModal) {
      // Disable scrolling when the modal is shown
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const token = getCookie("access_token");

  const navbarHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <nav className="w-full flex lg:hidden px-2 justify-between gap-6 ">
        <div className="min-w-max inline-flex ">
          <Link href="/" className=" flex items-center gap-3">
            <Image src="/logolight.png" alt="logo" height={35} width={176} />
          </Link>
        </div>
        <div className="min-w-max flex items-center gap-x-3 ">
          <button
            onClick={navbarHandler}
            className="lg:hidden lg:invisible  outline-none w-7 h-auto flex flex-col relative"
          >
            <span
              id="line-1"
              className="w-6 h-0.5 rounded-full bg-gray-700 transition-all duration-300 ease-linear"
            ></span>
            <span
              id="line-2"
              className="w-6 origin-center  mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear"
            ></span>
            <span
              id="line-3"
              className="w-6 mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear"
            ></span>
          </button>
        </div>

        <div
          onClick={navbarHandler}
          className={`${
            showModal === true ? " translate-x-0" : " translate-x-full"
          } transition-transform duration-700 fixed top-0 right-0  transform bottom-0 left-0 z-50 bg-[#0008]`}
        >
          <div
            className={`${
              showModal ? " translate-x-0" : " translate-x-full"
            } transition-transform duration-1000 float-right h-full w-3/4 md:w-3/5 lg:w-2/5 xl:w-1/3 text-black bg-white px-4 py-4`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <div className="min-w-max inline-flex">
                <Link href="/" className=" flex items-center gap-3">
                  <Image src="/V2.png" alt="logo" height={35} width={160} />
                </Link>
              </div>
              <button onClick={navbarHandler}>
                {" "}
                <Image src="/close.png" alt="close" height={25} width={25} />
              </button>
            </div>
            <ul className="relative space-y-2 pt-6 flex flex-col  gap-y-4 gap-x-2 text-lg text-black  justify-center  ">
              {links?.map((link) => (
                <Link href={link.href} key={link?.href}>
                  <li
                    className={`w-full duration-200   relative font-medium ease-linear  rounded-full  px-4  hover:text-white py-2 ${
                      pathName === link.href && "bg-[#4A4A4A] text-white"
                    } hover:bg-[#4A4A4A]`}
                  >
                    {link?.name}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="   flex items-center  w-full  mt-8  border-b border-gray-300  ">
              {token && currentUser ? (
                <Link
                  href="/client"
                  className="flex items-center  hover:scale-105 transition-transform duration-200 gap-2 bg-[#0000009c]  w-full rounded-full p-1  text-white "
                >
                  <img
                    src={currentUser?.profilePicture}
                    className="w-14 h-14 rounded-full "
                    alt=""
                  />
                  <span className="  relative z-10 font-bold capitalize pr-1">
                    {currentUser?.username &&
                      currentUser.username.substring(0, 20)}
                    .
                  </span>
                </Link>
              ) : (
                <Link
                  href="/sign-in"
                  className=" flex justify-center items-center  sm:w-max px-6 h-12 outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square text-white hover:text-black after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0 bg-[#94DA21] hover:bg-transparent hover:after:opacity-100 hover:after:scale-[2.5]  border-transparent hover:border-[#94DA21]
                    rounded-full "
                >
                  <span className=" w-[100px] text-center relative z-10 ">
                    Connexion
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveNavbar;
