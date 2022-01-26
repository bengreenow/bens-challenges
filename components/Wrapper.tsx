import React from "react";

type WrapperProps = {
    children: React.ReactNode;
};
export default function Wrapper(props: WrapperProps) {
    return <div className="container mx-auto">{props.children}</div>;
}
