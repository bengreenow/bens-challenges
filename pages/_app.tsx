import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SiteLayout } from "../layouts/SiteLayout";
import { ReactNode } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    const getLayout = Component.getLayout || ((page: ReactNode) => page);

    return <SiteLayout>{getLayout(<Component {...pageProps} />)}</SiteLayout>;
}

export default MyApp;
