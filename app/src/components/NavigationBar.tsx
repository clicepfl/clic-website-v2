import SVG from "./SVG";
import clicArrow from "assets/clic_arrow.svg";
import Link from "next/link";

function Entry({ title, href }: { title: string; href: string }) {
  return (
    <Link
      className="text-gray-100 uppercase font-bold text-xl m-4 leading-3 py-4 hover:border-b-4 hover:pb-0 ease-linear duration-75"
      href={href}
    >
      {title}
    </Link>
  );
}

export default function NavigationBar() {
  return (
    <div className="w-full h-16 z-40 bg-slate-700 flex px-4 justify-between items-center">
      <Link href="/">
        <SVG svg={clicArrow} className="w-10 h-10 relative" />
      </Link>
      <div className="flex gap-4">
        <Entry title="L'Association" href="/" />
        <Entry title="Commissions" href="/commissions" />
        <Entry title="Coaching" href="/coaching" />
        <Entry title="Évenements" href="/events" />
        <Entry title="News" href="/news" />
      </div>
    </div>
  );
}
