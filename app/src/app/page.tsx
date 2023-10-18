import background from "assets/background.svg";
import clicLogo from "assets/clic_logo_white.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="p-10 h-full flex flex-col items-center h-screen bg-cover"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="w-full h-[12rem] relative">
        <Image fill className="object-fit" src={clicLogo} alt="CLIC" />
      </div>
    </div>
  );
}
