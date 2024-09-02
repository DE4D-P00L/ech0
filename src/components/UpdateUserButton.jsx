"use client";

import { updateProfile } from "@/actions/actions";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useActionState } from "react";

const UpdateUserButton = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState(null);
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setOpen(true)}>
        Update User
      </span>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={(formData) =>
              formAction({ formData, cover: cover?.secure_url || "" })
            }
            className="p-12 bg-white rounded-lg flex flex-col gap-2 shadow-md w-full md:w-1/2 xl: 1/3 relative">
            <h1>Update Profile</h1>
            <div className="mt-4 text-xs text-gray-500">
              Use navbar profile to change username or avatar.
            </div>
            <div className="space-y-3 my-3">
              <label htmlFor="">Cover Picture</label>
              <CldUploadWidget
                uploadPreset="echo_preset"
                onSuccess={(res) => setCover(res.info)}>
                {({ open }) => {
                  return (
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => open()}>
                      <Image
                        src={user.cover || "/noCover.png"}
                        alt=""
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-600">
                        Change
                      </span>
                    </div>
                  );
                }}
              </CldUploadWidget>
            </div>

            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={user.name || "John"}
                  className="ring-1 ring-gray-300 p-[12px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder={user.lastname || "Doe"}
                  className="ring-1 ring-gray-300 p-[12px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder={user.description || "Life is awesome..."}
                  className="ring-1 ring-gray-300 p-[12px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder={user.city || "City"}
                  className="ring-1 ring-gray-300 p-[12px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  School
                </label>
                <input
                  type="text"
                  name="school"
                  placeholder={user.school || "School"}
                  className="ring-1 ring-gray-300 p-[12px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Work
                </label>
                <input
                  type="text"
                  name="work"
                  placeholder={user.work || "Work"}
                  className="ring-1 ring-gray-300 p-[12px] rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  placeholder={user.website || "www.example.com"}
                  className="ring-1 ring-gray-300 p-[12px] rounded-md text-sm"
                />
              </div>
            </div>

            <button
              className="bg-blue-500 p-2 mt-2 rounded-md text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isPending}>
              {isPending ? "Updating..." : "Update"}
            </button>
            {state.success && (
              <span className="text-green-500">Profile has been updated!</span>
            )}
            {state.error && (
              <span className="text-red-500">Something went wrong!</span>
            )}
            <div
              className="absolute text-lg top-2 right-4 cursor-pointer"
              onClick={handleClose}>
              X
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default UpdateUserButton;
