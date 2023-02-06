import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Oxanium } from "@next/font/google";
import twconfig from "tailwind.config";

const oxanium = Oxanium({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={oxanium.className}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          colors: { ...twconfig?.theme?.extend?.teal },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </main>
  );
}
