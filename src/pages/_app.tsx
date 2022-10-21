import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/css/all.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "@popperjs/core";
import "../styles/globals.scss";
import "../styles/style.scss";
import "animate.css";
// import "rsuite/dist/rsuite.min.css";

import "../utils/Theme";

if (process.browser) {
	require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
