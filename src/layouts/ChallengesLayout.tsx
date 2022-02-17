import React, { ReactNode } from "react";
import Wrapper from "../components/Wrapper";
import { getLayout as getSiteLayout } from "./SiteLayout";
import ChallengeLink from "../components/ChallengeLink";
import Sidebar from "../components/Sidebar";

export default function ChallengesLayout(props: { children: React.ReactNode }) {
    return (
        <Wrapper>
            <div className="flex flex-row divide-white divide-x divide-opacity-70 w-full">
                <div className="w-2/5 basis-1">
                    <Sidebar />
                </div>
                <div className="w-full">{props.children}</div>
            </div>
        </Wrapper>
    );
}

export const getLayout = (page: ReactNode) => {
    return getSiteLayout(<ChallengesLayout>{page}</ChallengesLayout>);
};
