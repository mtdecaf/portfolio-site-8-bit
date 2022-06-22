import "../styles/global/global.scss";
import Layout from "../components/layout";
import Head from "next/head";
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jacky Cao</title>
      </Head>
      {/* <AnimatePresence> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </AnimatePresence> */}
    </>
  );
}

export default MyApp;
