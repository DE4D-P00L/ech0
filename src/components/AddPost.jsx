"use client";

import { addPost } from "@/actions/actions";
import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState, useActionState } from "react";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [state, formAction, isPending] = useActionState(addPost, {
    success: false,
    error: false,
  });

  if (!isLoaded) return "Loading...";

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt=""
        width={48}
        height={48}
        className="size-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <form
          className="flex gap-4"
          action={(formData) => {
            formAction({ formData, img: img?.secure_url || "" });
            setImg("");
          }}>
          <textarea
            name="content"
            placeholder="Whats's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
            onChange={(e) => setContent(e.target.value)}></textarea>
          <div>
            <Image
              src="/emoji.png"
              alt=""
              width={20}
              height={20}
              className="size-5 cursor-pointer self-end"
            />
            <button
              className="bg-blue-500 p-2 mt-2 rounded-md text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isPending}>
              {isPending ? "Sending" : "Send"}
            </button>
          </div>
        </form>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="echo_preset"
            onSuccess={(res, { widget }) => {
              setImg(res.info);
              widget.close();
            }}>
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}>
                  <Image src="/addImage.png" alt="" width={20} height={20} />
                  {img ? "Image added" : "Photo"}
                </div>
              );
            }}
          </CldUploadWidget>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addEvent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
