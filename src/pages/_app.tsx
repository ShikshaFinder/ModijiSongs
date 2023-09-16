import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    // <AuthContextProvider>
    <ChakraProvider>

      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-987************676"
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    

      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
    // </AuthContextProvider>
  );
}
