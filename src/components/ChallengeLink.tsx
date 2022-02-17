import React from "react";

type ChallengeLinkProps = {
    name: string;
    subtitle?: string;
    active: boolean;
};

type refProps = { href: string; onClick: any };

export default React.forwardRef((props: ChallengeLinkProps & refProps, ref) => {
    return (
        <a
            href={props.href}
            onClick={props.onClick}
            className={`flex justify-between items-center rounded-md py-2 flex-row px-4 group cursor-pointer ${
                props.active && "bg-slate-800"
            }`}
        >
            <div className="group-hover:text-sky-300 transition-colors rounded">
                <p className="font-bold">{props.name}</p>
                {props.subtitle && (
                    <p className="text-slate-400">{props.subtitle}</p>
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
        </a>
    );
});
