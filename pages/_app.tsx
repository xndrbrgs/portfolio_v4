import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useRef } from "react";
import { SmoothScrollProvider } from "../utils/SmoothScroll.context";

const myFont = localFont({ src: "../public/fonts/Satoshi-Regular.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null);

  return (
    <SmoothScrollProvider containerRef={containerRef}>
      <main className={myFont.className} data-scroll-container>
        <Component {...pageProps} />
      </main>
    </SmoothScrollProvider>
  );
}
