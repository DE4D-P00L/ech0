import {
  SignedIn,
  SignedOut,
  SignInButton,
  ClerkLoading,
  ClerkLoaded,
} from "@clerk/nextjs";
import Link from "next/link";
import CustomUserButton from "./CustomUserButton";

const Header = async () => {
  return (
    <header className="flex bg-slate-500 h-16 items-center text-white">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="" className="font-bold text-2xl">
          <h1>Echo</h1>
        </Link>
        <nav className="flex gap-5 font-semibold text-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          {/* Signin */}
          <ClerkLoading>
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"></div>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <CustomUserButton />
            </SignedIn>
          </ClerkLoaded>
        </nav>
      </div>
    </header>
  );
};
export default Header;
