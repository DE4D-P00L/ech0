import Image from "next/image";
import Link from "next/link";
import Ad from "./Ad";

const LeftMenu = ({ type }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md text-sm text-gray-500">
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/posts.png" alt="" width={20} height={20} />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/activity.png" alt="" width={20} height={20} />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/market.png" alt="" width={20} height={20} />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/events.png" alt="" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/albums.png" alt="" width={20} height={20} />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/videos.png" alt="" width={20} height={20} />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/news.png" alt="" width={20} height={20} />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/courses.png" alt="" width={20} height={20} />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/lists.png" alt="" width={20} height={20} />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/settings.png" alt="" width={20} height={20} />
          <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm" />
    </div>
  );
};
export default LeftMenu;

const ProfileCard = () => {
  return (
    <div className=" flex flex-col gap-6 p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/15236842/pexels-photo-15236842/free-photo-of-woman-at-ruins-of-library-of-celsus.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/27054259/pexels-photo-27054259/free-photo-of-a-girl-with-a-helmet-sitting-on-the-grass-near-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={48}
          height={48}
          className="rounded-full size-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 rinz-white z-10 object-cover"
        />
      </div>
      <div className="h-20 flex flex-col items-center gap-2">
        <span className="font-semibold">Prashant</span>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <Image
              src="https://images.pexels.com/photos/27054259/pexels-photo-27054259/free-photo-of-a-girl-with-a-helmet-sitting-on-the-grass-near-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full size-3 object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/27054259/pexels-photo-27054259/free-photo-of-a-girl-with-a-helmet-sitting-on-the-grass-near-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full size-3 object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/27054259/pexels-photo-27054259/free-photo-of-a-girl-with-a-helmet-sitting-on-the-grass-near-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full size-3 object-cover"
            />
          </div>
          <span className="text-xs text-gray-500">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
};
