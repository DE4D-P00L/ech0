import AddPost from "@/components/AddPost";
import LeftMenu from "@/components/LeftMenu";
import PostFeed from "@/components/PostFeed";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";

export default function HomePage() {
  return (
    <main className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <PostFeed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </main>
  );
}
