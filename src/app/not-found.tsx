
import Link from "next/link";

const NotFound = () => {
    return (
        <div>
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 px-4">
      {/* Popup Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-8 md:p-12 max-w-lg w-full text-center animate-popup">
        
        {/* Big 404 */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-green-600 leading-none mb-2">
          404
        </h1>

        {/* Emoji */}
        <div className="text-5xl mb-4">🧺</div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base mb-8 leading-relaxed">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে, নাম পরিবর্তন হয়েছে, অথবা কখনোই ছিল না।
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm">
              🏠 হোমে ফিরে যান
            </button>
          </Link>
          <Link href="/market">
            <button className="w-full sm:w-auto bg-white hover:bg-green-50 text-green-700 font-semibold px-6 py-3 rounded-xl border-2 border-green-600 transition-colors">
              🛒 বাজার দেখুন
            </button>
          </Link>
        </div>
      </div>

      {/* Popup animation (Tailwind-er sathe simple CSS) */}
      <style>{`
        @keyframes popup {
          0% {
            opacity: 0;
            transform: scale(0.85) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-popup {
          animation: popup 0.4s ease-out forwards;
        }
      `}</style>
    </div>
 
        </div>
    );
};

export default NotFound;