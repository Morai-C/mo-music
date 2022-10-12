import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/css/all.css";
import "@popperjs/core";
import "../styles/globals.scss";
import "../styles/style.scss";

if (process.browser) {
	require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
