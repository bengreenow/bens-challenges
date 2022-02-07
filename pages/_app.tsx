import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SiteLayout } from "../layouts/SiteLayout";
import { ReactElement, ReactNode } from "react";
import { NextComponentType, NextPage } from "next";

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

    return <SiteLayout>{getLayout(<Component {...pageProps} />)}</SiteLayout>;
}

export default MyApp;
