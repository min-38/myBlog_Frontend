// app/posts/new/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { API_BASE_URL } from "@/utils/config.mjs"

export default function NewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newPost = { title, content };

    try {
      const res = await fetch(`${API_BASE_URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (res.ok) {
        router.push("/posts"); // 글 목록 페이지로 이동
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">글 작성</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 rounded h-40"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          작성하기
        </button>
      </form>
    </div>
  );
}
