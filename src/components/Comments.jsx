import prisma from "@/lib/prisma";
import CommentList from "./CommentList";

const Comments = async ({ postId }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });
  return (
    <div className="">
      <CommentList comments={comments} postId={postId} />
    </div>
  );
};
export default Comments;
