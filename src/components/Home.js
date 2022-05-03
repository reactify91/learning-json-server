import { Link } from "react-router-dom";
import PostList from "./PostList";
export default function Home() {
  return (
    <>
      <h2 className="px-10 my-4 text-3xl font-semibold uppercase">
        Welcome to home page
      </h2>
      <div className="flex justify-start space-x-10 px-10 my-4 text-indigo-700">
        <Link to="/create">Go to Create Page</Link>
        <Link to="/details">Go to Details Page</Link>
      </div>
      <PostList />
    </>
  );
}
