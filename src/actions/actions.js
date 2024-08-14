"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const switchFollow = async (userId) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("User not authenticated");

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingFollowReq = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      if (existingFollowReq) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowReq.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Something went wrong");
  }
};

export const switchBlock = async (userId) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) throw new Error("User not authenticated");
  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });

    if (existingBlock) {
      await prisma.block.delete({
        where: {
          id: existingBlock.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Something went wrong");
  }
};

export const acceptFollowRequest = async (userId) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) throw new Error("User not authenticated");
  try {
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest.id,
        },
      });
      await prisma.follower.create({
        data: {
          followerId: userId,
          followingId: currentUserId,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Something went wrong");
  }
};

export const rejectFollowRequest = async (userId) => {
  const { userId: currentUserId, username } = auth();
  if (!currentUserId) throw new Error("User not authenticated");
  try {
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest.id,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Something went wrong");
  }
};
