import axios from "axios";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Video } from "../../types";
import { BASE_URL } from "../../utils";

interface IProps {
  postDetails: Video;
}

const Detail = ({ postDetails }: IProps) => {
  const router = useRouter();
  const [post, setPost] = useState(postDetails);
  const videoRef = useRef();

  return <div>Detail</div>;
};

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const { data } = await axios.get(`${BASE_URL}/api/post/${id}`);

  return {
    props: { postDetails: data },
  };
};

export default Detail;
