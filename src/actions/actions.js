"use server";

import prisma from "@/lib/prisma";

export const testAction = async (userId, formData) => {
  const content = formData.get("content");
  try {
    const res = await prisma.post.create({
      data: {
        content,
        userId,
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};
