import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/comments" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2 ">
          <span className="text-xl text-black">Prahant</span>
          <span className="text-sm">@prashant25</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          reprehenderit, magni id, explicabo nemo omnis.
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>Haryana</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>MRIIRS</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>Google</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="/" className="font-medium text-blue-500">
              prashant.dev
            </Link>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <Image src="/date.png" alt="" width={16} height={16} />
          <span>Joined January 2016</span>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-500 self-end text-xs cursor-pointer">
          Block user
        </span>
      </div>
    </div>
  );
};
export default UserInfoCard;
