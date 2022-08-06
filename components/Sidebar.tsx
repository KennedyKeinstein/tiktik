import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const normalLink =
    "flex items-center justify-center gap-3 hover:bg-primary p-3 xl:justify-start cursor:pointer font-semibold text-[#F51997] rounded";

  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-l"
        onClick={toggleSidebar}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
