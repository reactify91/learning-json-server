import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="border-4 border-gray-700 flex flex-col gap-2  text-justify p-3">
      <p className="text-gray-900 font-semibold text-xl">{post.title}</p>
      <p className="  max-w-md text-gray-700 text-sm">{post.body}</p>
      <div className="flex items-center justify-between">
        <p className="bg-green-900 rounded-full h-6 w-6 cursor-pointer flex items-center justify-center">
          <small className="text-xs text-green-500  ">{post.likes}</small>
        </p>
        <Link
          className=" text-indigo-900 font-semibold underline-offset-2"
          to={`/details/${post.id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
