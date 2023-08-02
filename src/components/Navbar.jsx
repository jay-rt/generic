"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <button type="button" onClick={signOut}>
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
