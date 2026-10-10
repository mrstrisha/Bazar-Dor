"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const ProfilePage = () => {
const { data: session, isPending } = authClient.useSession();
const user = session?.user;

const handleUpdateProfile = async (
e: React.FormEvent<HTMLFormElement>
) => {
e.preventDefault();

const formData = new FormData(e.currentTarget);
const name = formData.get("name") as string;

const { error } = await authClient.updateUser({
  name: name,
});

if (error) {
  console.log("Update failed:", error);
  alert("নাম আপডেট করা যায়নি!");
  return;
}

if (error) {
  console.log(error);
  toast.error("নাম আপডেট করা যায়নি!");
  return;
}

toast.success("নাম সফলভাবে আপডেট হয়েছে!");

};

if (isPending) {
return <p className="text-center mt-10">Loading...</p>;
}

if (!user) {
return <p className="text-center mt-10">Please login first</p>;
}

return (
<div className="min-h-screen p-5">
<h1 className="text-2xl font-bold text-center mb-8">
আমার প্রোফাইল

<p className="font-normal text-base">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p> </h1>


{/* uporer part */}


<div className="w-full bg-base-100 p-4 md:px-6 md:py-5 rounded-2xl border border-success/60 flex flex-col sm:flex-row items-center justify-between gap-6">
  
  {/* Left Side: Image and Info */}
  <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
    
    {/* Avatar */}
    <div className="avatar">
      <div className="w-20 h-20 rounded-2xl bg-base-200">
        <img 
          src={user.image || "https://img.daisyui.com/images/profile/demo/distracted1@192.webp"}
          alt="user avatar" 
          className="object-cover"
        />
      </div>
    </div>

    {/* Text Info */}
    <div className="flex flex-col gap-1">
      <h2 className="text-2xl font-bold text-base-content">
       {user.name}
      </h2>
      <p className="text-base text-base-content/60">
     {user.email}
      </p>
    </div>
    
  </div>

  {/* Right Side: Sign Out Button */}
  <div>
    <button type="submit"   onClick={async () => {
    await authClient.signOut();
  }} className="btn btn-outline btn-error rounded-xl px-5 gap-2 h-12">
      {/* Logout Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
      <span className="font-semibold text-base">সাইন আউট</span>
    </button>
  </div>

</div>
{/* uporer part ses */}

  <div className="w-full mt-4 max-w-lg mx-auto bg-base-100 p-8 md:p-10 rounded-2xl shadow-xl border border-base-300">
    <form
      onSubmit={handleUpdateProfile}
      className="flex flex-col gap-8"
    >
      <h2 className="text-2xl font-bold text-base-content">
        তথ্য
      </h2>

      <div className="form-control w-full">
        <label className="label pb-3">
          <span className="label-text font-semibold text-base text-base-content/80">
            নাম
          </span>
        </label>

        <input
          type="text"
          name="name"
          defaultValue={user.name || ""}
          required
          className="input input-bordered w-full h-12 rounded-lg"
          placeholder="তোমার নাম লিখো"
        />
      </div>

      <div className="form-control mt-2">
        <button
          type="submit"
          className="btn btn-success text-white w-full h-12 rounded-lg text-lg font-medium shadow-md"
        >
          আপডেট
        </button>
      </div>
    </form>
  </div>
</div>

);
};

export default ProfilePage; 