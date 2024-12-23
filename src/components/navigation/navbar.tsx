import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export async function Navbar() {
  const user = await currentUser();

  return (
    <header className="fixed top-10 left-0 right-0 px-4 py-4 bg-background/40 backdrop-blur-lg border border-white rounded-2xl shadow-xl z-50 w-full max-w-[440px] md:max-w-4xl mx-auto">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/A-logo.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            />
            <span className="text-lg font-medium">AstraAI</span>
          </Link>
        </div>

        {/* Nav for larger screens */}
        <nav className="hidden md:flex">
          <ul className="flex items-center justify-center gap-8">
            <li className="hover:text-foreground/80 text-sm">
              <Link href="/#pricing">Pricing</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href="/#about">About</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href="/#features">Features</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <UserButton />
          ) : (
            <>
              <Link
                href="/sign-in"
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden md:flex",
                })}
              >
                Start free trial
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
