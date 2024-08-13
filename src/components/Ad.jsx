import Image from "next/image";

const Ad = ({ size }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-8 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}>
          <Image
            src="https://images.pexels.com/photos/27363340/pexels-photo-27363340/free-photo-of-burano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27363340/pexels-photo-27363340/free-photo-of-burano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={24}
            height={24}
            className="rounded-lg object-cover size-6"
          />
          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet, consectetur"
            : size === "md"
            ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sequi ex, eligendi nobis, consectetur itaque ratione exercitationem"
            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sequi ex, eligendi nobis, consectetur itaque ratione exercitationem saepe nam magni dicta harum numquam, quis ab architecto culpa! Soluta, ut omnis."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};
export default Ad;
