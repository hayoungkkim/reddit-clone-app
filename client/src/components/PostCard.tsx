import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Post } from "../types";

interface PostCardProps {
	post: Post;
}

const PostCard = ({ post: { identifier, slug, title, body, subName, createdAt, voteScore, userVote, commentCount, url, username, sub } }: PostCardProps) => {
	return (
		<div className="flex mb-4 bg-white rounded" id={identifier}>
			{/* 좋아요 싫어요 기능 부분 */}
			<div className="flex-shrink-0 w-10 py-2 text-center rounded-l">
				{/* 좋아요 */}
				<div
					className="flex justify-center w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500"
					// onClick={() => vote(1, comment)}
				>
					{userVote === 1 ? <FaArrowUp className="text-red-500" /> : <FaArrowUp />}
				</div>
				<p className="text-xs font-bold">{voteScore}</p>
				{/* 싫어요 */}
				<div
					className="flex justify-center w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-blue-500"
					// onClick={() => vote(-1, comment)}
				>
					{userVote === -1 ? <FaArrowDown className="text-blue-500" /> : <FaArrowDown />}
				</div>
			</div>
			{/* 포스트 데이터 부분 */}
			<div className="w-full p-2">
				<div className="flex items-center">
					{/* <div className="flex items-center">
						<Link href={`/r/${subName}`}>
							<Image src={sub!.imageUrl} alt="sub" className="w-6 h-6 mr-1 rounded-full cursor-pointer" />
						</Link>
						<Link href={`/r/${subName}`} className="text-xs font-bold cursor-pointer hover:underline">
							/r/{subName}
						</Link>
						<span className="mx-1 text-xs text-gray-400">•</span>
					</div> */}
					<p className="text-xs text-gray-400">
						Posted by <i className="fas fa-abacus"></i>
						<Link href={`/u/${username}`} className="mx-1 hover:underline">
							/u/{username}
						</Link>
						<Link href={url} className="mx-1 hover:underline">
							{dayjs(createdAt).format("YYYY-MM-DD HH:mm")}
						</Link>
					</p>
				</div>
				<h1 className="my-1 text-xl font-medium">{title}</h1>
				{body && <p className="my-3 text-sm">{body}</p>}
				<div className="flex">
					<Link href={url}>
						<i className="mr-1 fas fa-comment-alt fa-xs"></i>
						<span>{commentCount}</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
