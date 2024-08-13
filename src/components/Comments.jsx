import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/21852309/pexels-photo-21852309/free-photo-of-man-in-t-shirt-and-eyeglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={32}
          height={32}
          className="size-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full flex-1">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-between mt-6">
        <div className="">
          <Image
            src="https://images.pexels.com/photos/21852309/pexels-photo-21852309/free-photo-of-man-in-t-shirt-and-eyeglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">Rohan</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, amet
            quos? Modi numquam dolores omnis enim vitae, libero ullam porro
            expedita perspiciatis voluptate, beatae quae, officiis amet illo
            quaerat architecto.
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt=""
                width={12}
                height={12}
                className="cursor-pointer size-3"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123 Likes</span>
            </div>
            <div>Reply</div>
          </div>
        </div>
        <div>
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer size-4"
          />
        </div>
      </div>
    </div>
  );
};
export default Comments;
