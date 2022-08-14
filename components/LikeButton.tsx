import React, { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import useAuthStore from "../store/authStore";

interface IProps {
  likes: any[];
  handleLike: () => void;
  handleDislike: () => void;
}

const LikeButton = ({ likes, handleLike, handleDislike }: IProps) => {
  const [alreadyLiked, setalreadyLiked] = useState(false);
  const { userProfile }: any = useAuthStore();
  const findUserLikes = likes?.find((item) => item._ref === userProfile._id);

  useEffect(() => {
    if (findUserLikes) {
      setalreadyLiked(true);
    } else {
      setalreadyLiked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likes, findUserLikes]);

  return (
    <div className="flex gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLiked ? (
          <div
            className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]"
            onClick={handleDislike}
          >
            <MdFavorite className="text-lg mg:text-2xl" />
          </div>
        ) : (
          <div
            className="bg-primary rounded-full p-2 md:p-4"
            onClick={handleLike}
          >
            <MdFavorite className="text-lg mg:text-2xl" />
          </div>
        )}
        <p className="text-md font-semibold">{likes?.length || 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
