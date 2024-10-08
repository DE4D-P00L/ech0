import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

const UserMediaCard = async ({ user }) => {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/comments" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        {postsWithMedia.length > 0
          ? postsWithMedia.map((post) => (
              <div className="relative w-1/5 h-24" key={post.id}>
                {post?.img && (
                  <Image
                    src={post.img}
                    alt=""
                    fill
                    className="object-cover rounded-md"
                  />
                )}
              </div>
            ))
          : "No media found!"}
      </div>
    </div>
  );
};
export default UserMediaCard;
