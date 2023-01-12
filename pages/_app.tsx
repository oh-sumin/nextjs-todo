import Layout from "../src/components/Layout";
import Todo from "../src/components/Todo/Todo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Todo />
      <Component {...pageProps} />
    </Layout>
  );
}
