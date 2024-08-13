"use client";

const UserInfoCardInteraction = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}) => {
  return (
    <>
      <form action="">
        <button className=" bg-blue-500 text-white text-sm rounded-md p-2 w-full">
          {isFollowing
            ? "Following"
            : isFollowingSent
            ? "Follow request sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-500 text-xs cursor-pointer ml-auto">
          {isUserBlocked ? "Unblock user" : "Block user"}
        </span>
      </form>
    </>
  );
};
export default UserInfoCardInteraction;
