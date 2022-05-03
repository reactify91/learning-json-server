import { useState } from "react";
export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [likes, setLikes] = useState(0);
  console.log(title, body, likes);
  const handleSubmit = async () => {
    await fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.ceil(Math.random() * 999),
        title,
        body,
        likes,
      }),
    });
  };
  return (
    <div className="container px-36 flex flex-col gap-4 items-start justify-center min-h-[calc(100vh-4rem)] bg-gray-200">
      <h1 className="text-3xl font-bold text-gray-700">Create New Blog</h1>
      <form
        className="flex  flex-col items-start justify-center gap-4 mb-[100px]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Blog title..."
          required
          className="bg-white h-8 rounded-sm px-4 min-w-[300px] md:min-w-[400px]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          cols="20"
          rows="5"
          required
          className="resize-none bg-white px-4 rounded-sm min-w-[300px] md:min-w-[400px] focus:outline-none"
          placeholder="Blog body..."
        ></textarea>
        <input
          type="number"
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
        />
        <button className="text-indigo-700 underline" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
