import { SignUp } from "@clerk/nextjs";

const page = () => {
  return (
    <main className="min-h-[calc(100dvh-96px)] grid place-content-center w-full">
      <SignUp />
    </main>
  );
};
export default page;
