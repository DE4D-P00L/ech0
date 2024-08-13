import { UserButton } from "@clerk/nextjs";

const CustomUserButton = async () => {
  return (
    <div className="flex items-center gap-2">
      <UserButton />
    </div>
  );
};
export default CustomUserButton;
