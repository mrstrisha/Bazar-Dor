
interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "same";
    pct: number;
  };
  markets: Market[];
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${id}`
  );

  if (!res.ok) {
    throw new Error("পণ্যের তথ্য লোড করা যায়নি");
  }

  const data: Product = await res.json();

  const formatPrice = (price: number) =>
    price.toLocaleString("bn-BD");

  const unitName =
    data.unit === "kg"
      ? "কেজি"
      : data.unit === "liter"
      ? "লিটার"
      : data.unit === "piece"
      ? "টি"
      : data.unit;

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-3 py-6 sm:px-6 mt-3">
      <div className="mx-auto max-w-6xl space-y-4">

        {/* Product Header */}
        <section className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white/80 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
              {data.image || data.categoryIcon}
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-800">
                {data.nameBn}
              </h1>

              <p className="text-xs text-gray-500">
                {data.categoryNameBn} · {unitName}
              </p>

              <p className="mt-1 text-xs text-gray-600">
                আজকের বাজারদর এবং দামের পরিবর্তন
              </p>
            </div>
          </div>

          <div className="shrink-0 rounded-xl bg-[#f0f5f0] px-3 py-2 text-center">
            <p className="text-xs text-gray-500">
              বর্তমান দাম
            </p>

            <p className="text-xl font-bold text-gray-800">
              {formatPrice(data.today)}
            </p>

            <p className="text-xs text-gray-500">
              টাকা / {unitName}
            </p>

            <p
              className={`mt-1 text-xs font-bold ${
                data.change.dir === "up"
                  ? "text-red-500"
                  : data.change.dir === "down"
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              {data.change.dir === "up"
                ? "▲"
                : data.change.dir === "down"
                ? "▼"
                : "—"}{" "}
              {formatPrice(data.change.pct)}%
            </p>
          </div>
        </section>

        {/* Price Summary */}
        <section className="rounded-xl border border-gray-200 bg-white/80 p-4">
          <h2 className="mb-3 text-sm font-bold text-gray-800">
            দামের সামগ্রিক চিত্র
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-3">
              <p className="text-xs text-gray-500">
                গতকাল দাম
              </p>

              <p className="mt-1 font-bold text-green-600">
                {formatPrice(data.yesterday)} টাকা
              </p>

              <p className="mt-1 text-xs text-gray-500">
                গতকালের বাজারদর
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-3">
              <p className="text-xs text-gray-500">
                গত সপ্তাহে দাম
              </p>

              <p className="mt-1 font-bold text-red-500">
                {formatPrice(data.lastWeek)} টাকা
              </p>

              <p className="mt-1 text-xs text-gray-500">
                গত সপ্তাহের বাজারদর
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-3">
              <p className="text-xs text-gray-500">
                গত মাসে দাম
              </p>

              <p className="mt-1 font-bold text-green-600">
                {formatPrice(data.lastMonth)} টাকা
              </p>

              <p className="mt-1 text-xs text-gray-500">
                গত মাসের বাজারদর
              </p>
            </div>
          </div>

          {/* Market Table */}
          <h2 className="mb-3 mt-5 text-sm font-bold text-gray-800">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[550px] text-left text-xs">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-3 py-3">বাজার</th>
                  <th className="px-3 py-3">বিভাগ</th>
                  <th className="px-3 py-3">সর্বনিম্ন</th>
                  <th className="px-3 py-3">সর্বোচ্চ</th>
                  <th className="px-3 py-3">গড়</th>
                </tr>
              </thead>

              <tbody>
                {data.markets.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className="border-t border-gray-200 even:bg-[#f0f5f0] hover:bg-green-50"
                  >
                    <td className="px-3 py-3 font-medium text-gray-800">
                      {market.market}
                    </td>

                    <td className="px-3 py-3 text-gray-600">
                      {market.division}
                    </td>

                    <td className="px-3 py-3 text-gray-700">
                      {formatPrice(market.min)} টাকা
                    </td>

                    <td className="px-3 py-3 text-gray-700">
                      {formatPrice(market.max)} টাকা
                    </td>

                    <td className="px-3 py-3 font-semibold text-gray-800">
                      {formatPrice(
                        Math.round((market.min + market.max) / 2)
                      )} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
