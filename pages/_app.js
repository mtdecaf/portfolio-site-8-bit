import "../styles/global/global.scss";
import Layout from "../components/layout";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jacky Cao</title>
      </Head>
      <AnimateSharedLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimateSharedLayout>
    </>
  );
}

export default MyApp;
