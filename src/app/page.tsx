// import Header from "./components/Header";


// export default function Home() {
//   return (
//    <div>
  
//    </div>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import ProductSections from "./components/ProductSection";

// Optional: image path কে type-safe রাখতে চাইলে
interface HeroSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}








export default function Home({
 
  imageAlt = "Basket of fruits and vegetables",
}: HeroSectionProps) {
  return (
    <div>
    <section className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 mt-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side - Text content */}
        <div className="flex-1">
          {/* Date badge */}
          <div className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
            শনিবার, ৬ আষাঢ়, ২০২৬
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* Button */}
          <Link href="/market">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              সব বাজার দেখুন
            </button>
          </Link>
        </div>

        {/* Right side - Image */}
        <div className="flex-shrink-0">
         
<Image
  src="/bazar-Hero.png"
  alt={imageAlt}
  width={288}
  height={288}
  className="w-48 md:w-64 lg:w-72 h-auto"
/>
        </div>
      </div>
    </section>
      <ProductSections></ProductSections>
    </div>
  );
}
