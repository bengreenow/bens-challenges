import React, { ReactNode } from "react";

export function SiteLayout(props: { children: React.ReactNode }) {
    return <div id="site">{props.children}</div>;
}

export const getLayout = (page: ReactNode) => {
    return <SiteLayout>{page}</SiteLayout>;
};
