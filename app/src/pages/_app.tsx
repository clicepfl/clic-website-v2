// The ?url suffix allows to import the background using the classic NextJS loader (instead of SVGR).
// This is required to get a url for the `background-image` css property.
// @ts-ignore
import Background from "../../public/background.svg?url";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import "@/styles/fonts.scss";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar
        commissions={pageProps.layoutProps?.commissions}
        langs={pageProps.layoutProps?.langs}
      />
      <div
        className="main"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <Component {...pageProps} />
      </div>
      <Footer association={pageProps.layoutProps?.association} />
    </>
  );
}
