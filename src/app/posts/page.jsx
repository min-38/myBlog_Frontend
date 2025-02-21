// app/posts/list.jsx
import Link from "next/link";

import { API_BASE_URL } from "@/utils/config.mjs"

async function getPosts() {
    const res = await fetch(`${API_BASE_URL}/posts`);
    return res.json();
}

export default async function PostsPage() {
    const posts = await getPosts(); // 서버에서 포스트 가져오기

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">게시판</h1>
            <Link href="/posts/new" className="bg-blue-500 text-white px-4 py-2 rounded">글 작성하기</Link>
            <ul className="mt-4">
                {posts.map((post) => (
                    <li key={post.id} className="border-b py-2">
                        <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
