import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import '@mantine/core/styles.css';
import  { MantineProvider } from '@mantine/core';
import Navbar from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.


const activeChain = "base-sepolia-testnet"; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      apiKey={process.env.NEXT_PUBLIC_TEMPLATE_API_KEY}
      activeChain={activeChain}

    >
      <MantineProvider>
        <Navbar />
        <Component {...pageProps} />
      </MantineProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
