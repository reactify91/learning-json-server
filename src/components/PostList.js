import { useState, useEffect } from "react";
import Post from "./Post";
export default function PostList() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch("http://localhost:8000/posts");
      const data = await response.json();
      setPosts(data);
    };
    getBlogs();
  }, []);

  return (
    <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
