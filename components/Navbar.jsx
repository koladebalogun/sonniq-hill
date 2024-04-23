import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link href="/">S-H</Link>
        </div>

        <div className="links">
          <Link href="/about">About Us</Link>
          <Link href="/artists">Our Artists</Link>
          {/* <a href="/About">About</a> */}
        </div>
      </nav>
    </div>
  );
}
 