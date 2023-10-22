import CommitteeDisplay from "@/components/CommitteeDisplay";
import EventsGrid from "@/components/EventsGrid";
import NewsGrid from "@/components/NewsGrid";
import SVGMask from "@/components/SVG";
import background from "assets/background.svg";
import clicLogo from "assets/clic_logo.svg";
import githubLogo from "assets/github_logo.svg";
import instagramLogo from "assets/instagram_logo.svg";
import linkedinLogo from "assets/linkedin_logo.svg";
import telegramLogo from "assets/telegram_logo.svg";
import twitterLogo from "assets/twitter_logo.svg";
import Link from "next/link";

function Networks() {
  function Network({ href, svg }: { href: string; svg: any }) {
    return (
      <Link href={href} target="_blank">
        <SVGMask className="w-10 h-10 relative" svg={svg} />
      </Link>
    );
  }

  return (
    <div className="flex p-4 mt-6 mb-10 gap-6">
      <Network href="https://github.com/clicepfl" svg={githubLogo} />
      <Network href="https://www.instagram.com/clicepfl/" svg={instagramLogo} />
      <Network href="https://t.me/clicnews" svg={telegramLogo} />
      <Network href="https://twitter.com/CLICepfl" svg={twitterLogo} />
      <Network
        href="https://www.linkedin.com/company/clic-epfl"
        svg={linkedinLogo}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="p-10 h-full flex flex-col items-center bg-cover p-10"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "100%",
      }}
    >
      <SVGMask
        className="w-full min-h-[12rem] h-[12rem] relative"
        svg={clicLogo}
      />
      <Networks />
      <EventsGrid />
      <NewsGrid />
      <CommitteeDisplay />
    </div>
  );
}
