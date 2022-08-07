import Link from "next/link";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Discover";
import Footer from "./Footer";
import SuggestedAccounts from "./SuggestedAccounts";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const normalLink =
    "flex items-center justify-center gap-3 hover:bg-primary p-3 xl:justify-start cursor:pointer font-semibold text-[#F51997] rounded";
  const userProfile = false;

  return (
    <div>
      <div className="block m-2 ml-4 mt-3 text-l">
        <div className="xl:hidden" onClick={toggleSidebar}>
          {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
        </div>

        {showSidebar && (
          <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
            <div className="xl:border-b-2 border-gray-200 xl:pb-4">
              <Link href="/">
                <div className={normalLink}>
                  <p className="text-2xl">
                    <AiFillHome />
                  </p>
                  <span className="text-xl hidden xl:block">For you</span>
                </div>
              </Link>
            </div>

            {!userProfile && (
              <div className="px-2 py-4 xl:block hidden">
                <p className="text-gray-400">
                  Log in to like and comment on videos
                </p>

                <div className="pr-4">
                  <GoogleLogin
                    clientId=""
                    render={(renderProps) => (
                      <button
                        className="bg-white text-lg text-[#F51997] border-[#F51997] border-[1px] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51997] cursor-pointer"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Log in
                      </button>
                    )}
                    onSuccess={() => {}}
                    onFailure={() => {}}
                    cookiePolicy="single_host_origin"
                  />
                </div>
              </div>
            )}

            <Discover />
            <SuggestedAccounts />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
