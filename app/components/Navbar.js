"use client"; //This directive ensures the component runs on the client side

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link href="/posts" className={pathname === "/posts" ? "active" : ""}>
        Posts
      </Link>
      <Link href="/users" className={pathname === "/users" ? "active" : ""}>
        Users
      </Link>
    </nav>
  );
}
