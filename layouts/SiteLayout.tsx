import React from "react";

export default function SiteLayout(props: { children: React.ReactNode }) {
    return <div id="site">{props.children}</div>;
}
