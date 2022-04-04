import "../styles/globals.css";
import { AuthProvider } from "../context/AuthProvider";
import { LayoutProvider } from "../context/LayoutProvider";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
