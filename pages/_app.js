import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} style={{ backgroundColor: "#F2F2FA" }} />;
}

export default MyApp;
