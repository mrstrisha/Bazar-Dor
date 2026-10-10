import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Product {
  id: string;
  nameBn: string;
  today: number;
  unit: string;
  change: {
    dir: string;
    pct: number;
  };
}



const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );

  const data: Product[] = await res.json();

  console.log("data is:", data);

  return (
    <div className="bg-green-100 mt-4">
      <MarqueeText direction="right" duration={20}>
        {data.map((d) => (
          <span key={d.id} className="flex">
            <span className="flex">
              {d.nameBn}
              {d.today.toLocaleString("bn-BD")} টাকা /
              {d.unit}

              <p
                className={
                  d.change.dir === "up"
                    ? "text-green-600"
                    : d.change.dir === "down"
                    ? "text-red-600"
                    : "text-gray-500"
                }
              >
                {d.change.dir === "up"
                  ? "▲"
                  : d.change.dir === "down"
                  ? "▼"
                  : "–"}

                {d.change.pct.toLocaleString("bn-BD")}%
              </p>
            </span>

            <span className="mx-4">•</span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;