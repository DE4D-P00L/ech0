import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
      <Image
        src="https://images.pexels.com/photos/21852309/pexels-photo-21852309/free-photo-of-man-in-t-shirt-and-eyeglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={48}
        height={48}
        className="size-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea
            name=""
            id=""
            placeholder="Whats's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="size-5 cursor-pointer self-end"
          />
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addImage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addEvent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
