import SVGMask from "@/components/SVG";
import background from "assets/background.svg";
import clicLogo from "assets/clic_logo.svg";

export default function Home() {
  return (
    <div
      className="p-10 h-full flex flex-col items-center h-screen bg-cover"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <SVGMask className="w-full h-[12rem] relative" svg={clicLogo} />
    </div>
  );
}
