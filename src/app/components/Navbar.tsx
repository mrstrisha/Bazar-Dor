
import Link from "next/link";

interface Navs {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const Navbar = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories"
  );

  const navs: Navs[] = await res.json();

  return (
    <div className="max-w-7xl mx-auto flex justify-start gap-4 pl-5">
      {navs.map((n) => (
        <Link
          key={n.id}
          href={`/category/${n.slug}`}
          className="font-bold gap-2"
        >
          {n.icon}
          {n.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
