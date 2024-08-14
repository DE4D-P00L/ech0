"use client";

import { switchBlock, switchFollow } from "@/actions/actions";
import { useState, useOptimistic } from "react";

const UserInfoCardInteraction = ({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingSent: isFollowingSent,
  });

  const follow = async () => {
    switchOptimisticState("follow");
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingSent: !prev.following && !prev.followingSent ? true : false,
      }));
    } catch (error) {}
  };

  const block = async () => {
    switchOptimisticState("block");
    await switchBlock(userId);
    setUserState((prev) => ({
      ...prev,
      blocked: !prev.blocked,
    }));
  };

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value) =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followingSent:
              !state.following && !state.followingSent ? true : false,
          }
        : { ...state, blocked: !state.blocked }
  );
  return (
    <>
      <form action={follow}>
        <button className=" bg-blue-500 text-white text-sm rounded-md p-2 w-full">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingSent
            ? "Follow request sent"
            : "Follow"}
        </button>
      </form>
      <form action={block} className="self-end">
        <button>
          <span className="text-red-500 text-xs cursor-pointer ml-auto">
            {optimisticState.blocked ? "Unblock user" : "Block user"}
          </span>
        </button>
      </form>
    </>
  );
};
export default UserInfoCardInteraction;
