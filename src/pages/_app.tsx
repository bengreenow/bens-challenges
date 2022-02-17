import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SiteLayout } from "../layouts/SiteLayout";
import { createContext, ReactElement, ReactNode } from "react";
import { NextComponentType, NextPage } from "next";
import App from "next/app";
import { fetchAPI } from "../lib/strapi";
import { Challenge } from "../types/Challenge";

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export const GlobalContext = createContext({});

export function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const { global } = pageProps;

    const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

    return <SiteLayout>{getLayout(<Component {...pageProps} />)}</SiteLayout>;
}

// MyApp.getInitialProps = async (ctx: any) => {
//     // Calls page's `getInitialProps` and fills `appProps.pageProps`
//     const appProps = await App.getInitialProps(ctx);
//     // Fetch global site settings from Strapi
//     const globalRes = await fetchAPI("/global", {
//         populate: {
//             defaultSeo: {
//                 populate: "*",
//             },
//         },
//     });

//     // Pass the data to our page via props
//     return {
//         ...appProps,
//         pageProps: { global: globalRes.data },
//     };
// };

export default MyApp;
