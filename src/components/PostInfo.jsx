"use client";

import { deletePost } from "@/actions/actions";
import Image from "next/image";
import { useState } from "react";

const PostInfo = ({ postId }) => {
  const [open, setOpen] = useState(false);

  const deletePostWithId = deletePost.bind(null, postId);
  return (
    <div className="relative">
      <Image
        src="/more.png"
        alt=""
        width={16}
        height={16}
        className="cursor-pointer"
        onClick={() => setOpen((p) => !p)}
      />
      {open && (
        <div className="absolute top-4 right-0 bg-white p-4 rounded-lg flex flex-col gap-2 text-xs shadow-lg z-30">
          <span className="cursor-pointer">View</span>
          <span className="cursor-pointer">Repost</span>
          <form action={deletePostWithId}>
            <button className="text-red-500">Delete</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default PostInfo;
