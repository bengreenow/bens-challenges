import { GetStaticProps, InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import { getLayout } from "../../layouts/ChallengesLayout";
import { fetchAPI } from "../../lib/strapi";
import { Challenge } from "../../types/Challenge";
import { NextPageWithLayout } from "../_app";

type PageProps = {
    challenges: Challenge[];
};

const Challenges: NextPageWithLayout = ({
    challenges,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <div>Welcome home</div>;
};

export const getStaticProps: GetStaticProps = async () => {
    const challenges = await fetchAPI<Challenge[]>("/challenges");

    return {
        props: {
            challenges: challenges,
        },
    };
};

Challenges.getLayout = getLayout;
export default Challenges;
