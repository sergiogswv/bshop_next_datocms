import Head from "next/head";
import Header from "./Header";
import Fondo from "./Fondo";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head></Head>
      <Header />
      <Fondo />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
