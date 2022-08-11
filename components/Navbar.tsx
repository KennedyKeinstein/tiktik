import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useAuthStore from "../store/authStore";
import { createOrGetUser } from "../utils";
import Logo from "../utils/tiktik-logo.png";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const { userProfile, addUser, removeUser }: any = useAuthStore();
  const handleLogOut = () => {
    googleLogout();
    removeUser();
  };

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="TikiTaoka"
            layout="responsive"
          />
        </div>
      </Link>

      <div>SEARCH</div>

      <div className="">
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" />
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href="/">
                <Image
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                  src={userProfile.image}
                  alt="profile phoot"
                />
              </Link>
            )}

            <button type="button" className="px-2" onClick={handleLogOut}>
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onError={() => console.log("Error")}
            onSuccess={(response) => createOrGetUser(response, addUser)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
