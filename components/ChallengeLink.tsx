import React from "react";

type WrapperProps = {
    name: string;
    subtitle?: string;
};
export default function Wrapper(props: WrapperProps) {
    return (
        <div className="flex justify-between items-center py-2 flex-row px-4 group cursor-pointer">
            <div className="group-hover:text-sky-300 transition-colors">
                <p className="font-bold">{props.name}</p>
                {props.subtitle && (
                    <p className="text-slate-500">{props.subtitle}</p>
                )}
            </div>
            <svg
                style={{ width: "48px", height: "48px" }}
                viewBox="0 0 24 24"
                className="group-hover:translate-x-2 transition-transform"
            >
                <path
                    fill="currentColor"
                    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
            </svg>
        </div>
    );
}
