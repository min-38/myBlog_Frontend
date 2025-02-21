import Link from "next/link";
import { API_BASE_URL } from "@/utils/config.mjs";
import DeleteButton from "@/components/posts/buttons/DeleteButton";

async function loadPost(id) {
    const res = await fetch(`${API_BASE_URL}/posts/${id}`);
    if (!res.ok) throw new Error("게시글을 불러오는 중 오류 발생");
    return res.json();
}

export default async function PostDetailPage({ params }) {
    const post = await loadPost(params.id);

    try {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <div className="mt-4">{post.content}</div>
                <Link href="/posts" className="mt-4 inline-block text-blue-600 hover:underline">
                    ← 게시글 목록으로
                </Link>
                <DeleteButton id={post.id} />
            </div>
        );
    } catch (error) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold text-red-500">게시글을 찾을 수 없습니다.</h1>
                <Link href="/posts" className="mt-4 inline-block text-blue-600 hover:underline">
                    ← 게시글 목록으로
                </Link>
            </div>
        );
    }
}
