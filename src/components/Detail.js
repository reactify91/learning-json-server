import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Detail() {
  const [post, setPost] = useState({});
  const detailId = useParams().detailId;
  useEffect(() => {
    const getPost = async () => {
      const res = await fetch("http://localhost:8000/posts/" + detailId);
      const data = await res.json();
      setPost(data);
    };
    getPost();
  });
  return (
    <div className="my-10 p-6 flex flex-col gap-8 justify-center items-center ">
      <img
        src={`https://picsum.photos/300/${300 + Number(detailId)}`}
        alt="random"
      />
      <p className="text-2xl font-bold text-gray-700 ">{post.title}</p>
      <p className="text-md text-gray-600 max-w-xl">{post.body}</p>
    </div>
  );
}
