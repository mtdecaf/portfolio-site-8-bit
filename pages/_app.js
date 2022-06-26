import "../styles/global/global.scss";
import Layout from "../components/layout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jacky Cao</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta
          name="description"
          content="Jacky Cao software developer's website. Find a list of projects and profile by Jacky here."
        />
        <meta name="robots" content="index, follow" />
        <meta charset="UTF-8" />
      </Head>
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  );
}

export function reportWebVitals(metric) {
  console.log(metric);
}

export default MyApp;
