import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import Wrapper from "../../components/Wrapper";
import ChallengeLink from "../../components/ChallengeLink";
import { getLayout } from "../../layouts/ChallengesLayout";
import { Fragment, ReactChild, ReactNode } from "react";
import { useRouter } from "next/router";
import { Challenge } from "../../types/Challenge";
import { fetchAPI } from "../../lib/strapi";
import { NextPageWithLayout } from "../_app";
import ReactMarkdown from "react-markdown";

const Challenges: NextPageWithLayout = ({
    challenge,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Fragment>
            {challenge ? (
                <Fragment>
                    <h1 className="text-4xl font-bold">
                        {challenge.data.attributes.Title}
                    </h1>
                    <div className="prose prose-invert">
                        <ReactMarkdown
                            children={challenge.data.attributes.Description}
                        />
                    </div>
                </Fragment>
            ) : (
                <div>Challenge Not Found</div>
            )}
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;
    let challenge = null;
    try {
        challenge = await fetchAPI<Challenge>(`/challenges/${id}`);
    } catch (err) {
        console.log(err);
    }
    return {
        props: {
            challenge: challenge,
        },
    };
};

export async function getStaticPaths() {
    const challenges = await fetchAPI<Challenge[]>("/challenges", {
        fields: ["id"],
        pagination: {
            pageSize: -1,
        },
    });

    const result = {
        paths: challenges.data.map((challenge) => {
            return {
                params: { id: challenge.id.toString() },
            };
        }),
        fallback: true,
    };
    console.log(result);
    return result;
}

Challenges.getLayout = getLayout;
export default Challenges;
