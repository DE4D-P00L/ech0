"use client";

import { acceptFollowRequest, rejectFollowRequest } from "@/actions/actions";
import Image from "next/image";
import { useState, useOptimistic } from "react";

const FriendRequestList = ({ requests }) => {
  const [requestState, setRequestState] = useState(requests);

  const accept = async (requestId, userId) => {
    removeOptimisticRequests(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const reject = async (requestId, userId) => {
    removeOptimisticRequests(requestId);
    try {
      await rejectFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const [optimisticRequests, removeOptimisticRequests] = useOptimistic(
    requestState,
    (state, value) => state.filter((req) => req.id !== value)
  );

  return (
    <div>
      {optimisticRequests.map((req) => (
        <div className="flex items-center justify-between" key={req.id}>
          <div className="flex items-center gap-4">
            <Image
              src={req.sender.avatar || "/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full"
            />
            <span className="font-semibold">
              {req.sender.name && req.sender.lastname
                ? req.sender.name + " " + req.sender.lastname
                : req.sender.username}
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <form action={() => accept(req.id, req.sender.id)}>
              <button>
                <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
            <form action={() => reject(req.id, req.sender.id)}>
              <button>
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FriendRequestList;
