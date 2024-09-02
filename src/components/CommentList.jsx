"use client";

import { addComment } from "@/actions/actions";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState, useOptimistic } from "react";

const CommentList = ({ comments, postId }) => {
  const { user } = useUser();
  const [commentState, setCommentState] = useState(comments);
  const [description, setDescription] = useState("");
  const [optimisticComment, setOptimisticComment] = useOptimistic(
    commentState,
    (state, value) => [value, ...state]
  );

  const addCommentHandler = async () => {
    if (!user || !description) return;
    setOptimisticComment({
      id: Math.random(),
      description,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      userId: user.id,
      postId: postId,
      user: {
        id: user.id,
        username: "Sending...",
        avatar: user.imageUrl || "/noAvatar.png",
        cover: "",
        description: "",
        name: "",
        lastname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });
    try {
      const createdComment = await addComment(postId, description);
      setCommentState((prev) => [createdComment, ...prev]);
    } catch (error) {}
  };

  return (
    <>
      {user && (
        <div className="flex items-center gap-4">
          <Image
            src={user.imageUrl || "/noAvatar.png"}
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-full"
          />
          <form
            className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full flex-1"
            action={addCommentHandler}>
            <input
              type="text"
              placeholder="Write a comment..."
              className="bg-transparent outline-none flex-1"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Image
              src="/emoji.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </form>
        </div>
      )}
      <div className="">
        {optimisticComment.map((c) => (
          <div className="flex gap-4 justify-between mt-6" key={c.id}>
            <Image
              src={c.user.avatar || "/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full"
            />
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-medium">
                {c.user.name && c.user.lastname
                  ? c.user.name + " " + c.user.lastname
                  : c.user.username}
              </span>
              <p>{c.content}</p>
              <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/like.png"
                    alt=""
                    width={12}
                    height={12}
                    className="cursor-pointer size-3"
                  />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">0 Likes</span>
                </div>
                <div>Reply</div>
              </div>
            </div>
            <div>
              <Image
                src="/more.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer size-4"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default CommentList;
