import { GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useAuthStore from "../store/authStore";
import { createOrGetUser } from "../utils";
import Logo from "../utils/tiktik-logo.png";

const Navbar = () => {
  const { userProfile, addUser }: any = useAuthStore();

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
          <div>{userProfile?.name}</div>
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
