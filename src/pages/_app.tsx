import type { AppProps } from "next/app";
import Wave from "react-wavify";
import "../app/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global wave background - appears on all pages */}
      <Wave
        fill="#fa9d78"
        paused={false}
        style={{
          position: "fixed",
          top: 500,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />

      {/* All page content renders here */}
      <Component {...pageProps} />
    </>
  );
}
