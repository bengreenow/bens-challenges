import type { NextPage } from "next";
import Link from "next/link";
import Wrapper from "../../components/Wrapper";
import ChallengeLink from "../../components/ChallengeLink";
import { getLayout } from "../../layouts/ChallengesLayout";
import { ReactChild, ReactNode } from "react";

const Challenges: NextPage & { getLayout: (page: ReactNode) => void } = () => {
    return <div>This is the default Challenge Page</div>;
};

Challenges.getLayout = getLayout;
export default Challenges;
