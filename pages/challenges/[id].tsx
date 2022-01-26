import type { NextPage } from "next";
import Link from "next/link";
import Wrapper from "../../components/Wrapper";
import ChallengeLink from "../../components/ChallengeLink";
import { getLayout } from "../../layouts/ChallengesLayout";
import { ReactChild, ReactNode } from "react";
import { useRouter } from "next/router";

const Challenges: NextPage & { getLayout: (page: ReactNode) => void } = () => {
    const router = useRouter();
    const { id } = router.query;

    return <div>Welcome to challenge number {id}</div>;
};

Challenges.getLayout = getLayout;
export default Challenges;
