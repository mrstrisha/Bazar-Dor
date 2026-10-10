"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const UserButton = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  const handleSignOut = async()=>{
    await authClient.signOut();
  }

  return (
    <div>
     {user && pathname !== "/signin" && pathname !== "/signUp" ? (

  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost m-1 flex items-center gap-2">
      <div className="avatar">
        <div className="mask mask-squircle w-8 h-8">
          <img
            alt="User Avatar"
            src={user.image || "https://img.daisyui.com/images/profile/demo/distracted1@192.webp"}
          />
        </div>
      </div>
      <span>{user.name} ▼</span>
    </div>

<ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm">
  <li><Link href="/profile">👤 আমার প্রোফাইল</Link></li>
  <li><a onClick={handleSignOut}>↩ সাইন আউট</a></li>
</ul>

  </div>
) : (
  <div className="flex items-center gap-2">
    <Link
      href="/signin"
      className={`btn btn-outline ${
        pathname === "/signin"
          ? "bg-green-700 text-white border-green-700"
          : "border-gray-300"
      }`}
    >
      সাইন ইন
    </Link>

<Link
  href="/signUp"
  className={`btn btn-outline ${
    pathname === "/signUp"
      ? "bg-green-700 text-white border-green-700"
      : "border-gray-300"
  }`}
>
  সাইন আপ
</Link>

  </div>
)}
    </div>
  );
};

export default UserButton;






