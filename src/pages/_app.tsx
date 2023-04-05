import Header from "@/Components/Header/Header";
import { Layout } from "@/Components/Layout/Layout";
import { theme } from "@/utils/utils";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
