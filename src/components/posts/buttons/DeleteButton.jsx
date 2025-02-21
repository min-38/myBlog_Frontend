"use client"; // 🔹 클라이언트 컴포넌트 선언

import { API_BASE_URL } from "@/utils/config.mjs"

export default function DeleteButton({ id }) {
    const deletePost = async () => {
        const res = await fetch(`${API_BASE_URL}/posts/${id}`, {
            method: "DELETE",
        });

        if (res.ok)
            window.location.href = "/posts";
        else
            alert("게시글 삭제 실패!");
    };

    return (
        <button
            onClick={deletePost}
            className="bg-red-500 text-white px-4 py-2 rounded"
        >
            삭제
        </button>
    );
}
