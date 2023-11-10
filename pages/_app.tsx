import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../app/Layout";
import { AppProvider } from "../app/context/AppContext"; // Import the AppProvider

export default function App({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider>
      <AppProvider> {/* Wrap your Layout with the AppProvider */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </AppProvider>
    </ChakraProvider>
    
  );
}
