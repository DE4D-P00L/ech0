"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

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
    // throw new Error("Something went wrong");
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
    // throw new Error("Something went wrong");
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

export const updateProfile = async (prevState, payload) => {
  const { formData, cover } = payload;
  const { userId } = auth();
  if (!userId) return { success: false, error: true };
  const fields = Object.fromEntries(formData);
  const filteredFields = Object.fromEntries(
    Object.entries(fields).filter(([_, value]) => value !== "")
  );

  const Profile = z.object({
    cover: z.string().optional(),
    name: z.string().max(60).optional(),
    description: z.string().max(255).optional(),
    city: z.string().max(255).optional(),
    school: z.string().max(255).optional(),
    work: z.string().max(255).optional(),
    website: z.string().max(255).optional(),
  });

  const validateFields = Profile.safeParse({ ...filteredFields, cover });
  if (!validateFields.success) {
    console.log(validateFields.error.flatten().fieldErrors);
    return { success: false, error: true };
  }

  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: validateFields.data,
    });
    revalidatePath(`/profile/${user?.username}`);
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
};

export const switchLike = async (postId) => {
  const { userId } = auth();
  if (!userId) throw new Error("User not authenticated");
  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        postId,
        userId,
      },
    });
    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
    } else {
      await prisma.like.create({
        data: {
          postId,
          userId,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Something went wrong");
  }
};

export const addComment = async (postId, description) => {
  const { userId } = auth();
  if (!userId) throw new Error("User is not authenticated");
  try {
    const createdComment = await prisma.comment.create({
      data: {
        content: description,
        userId,
        postId,
      },
      include: {
        user: true,
      },
    });
    return createdComment;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const addPost = async (prevState, payload) => {
  const { formData, img } = payload;
  const c = Object.fromEntries(formData);
  const content = c.content;
  const ContentData = z.string().min(1).max(255);
  const validatedContent = ContentData.safeParse(content);
  if (!validatedContent.success) {
    console.log("Invalid content");
  }
  const { userId } = auth();
  if (!userId) throw new Error("User is not authenticated");
  try {
    await prisma.post.create({
      data: {
        content: validatedContent.data,
        userId,
        img,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const addStory = async (payload) => {
  const { img } = payload;

  const { userId } = auth();
  if (!userId) throw new Error("User is not authenticated");

  try {
    const existingStory = await prisma.story.findFirst({
      where: {
        userId,
      },
    });

    if (existingStory) {
      await prisma.story.delete({
        where: {
          id: existingStory.id,
        },
      });
    }

    const createdStory = await prisma.story.create({
      data: {
        img,
        userId,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
      include: {
        user: true,
      },
    });
    return createdStory;
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = async (postId) => {
  const { userId } = auth();
  if (!userId) throw new Error("User is not authenticated");
  try {
    await prisma.post.delete({
      where: {
        id: postId,
        userId,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};
