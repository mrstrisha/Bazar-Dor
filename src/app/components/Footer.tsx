
const Footer = () => {
  return (
    <footer className="mt-10 border-t border-green-200 bg-[#f0f5f0]">
      <div className="mx-auto max-w-7xl px-5 py-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-extrabold text-green-800">
              বাজারদর
              <span className="ml-1 text-green-500">.</span>
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              প্রতিদিনের বাজারদর এখন হাতের নাগালে।
            </p>
          </div>

          {/* Right Side */}
          <div className="sm:text-right">
            <p className="text-sm font-semibold text-gray-700">
              সঠিক দাম জানুন, সচেতনভাবে বাজার করুন।
            </p>

            <p className="mt-1 text-xs text-gray-500">
              নিত্যপ্রয়োজনীয় পণ্যের দাম এক জায়গায়।
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col justify-between gap-2 border-t border-green-200 pt-4 text-xs text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} বাজারদর। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <p>বাংলাদেশের বাজার, আপনার হাতেই। 🇧🇩</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;