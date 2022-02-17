import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { fetchAPI } from "../lib/strapi";
import { Challenge } from "../types/Challenge";
import { StrapiAPIResponse, StrapiObject } from "../types/Strapi";
import ChallengeLink from "./ChallengeLink";

const sidebarItems = () => {
    const [items, setItems] = useState<StrapiObject<Challenge>[]>();
    useEffect(() => {
        fetchAPI<Challenge[]>("/challenges", {
            fields: ["Title", "Difficulty"],
        }).then((data) => {
            setItems(data.data);
        });
    }, []);

    return items;
};

export default function Sidebar() {
    const router = useRouter();
    const items = sidebarItems();
    if (!items?.length) {
        return <p>Loading</p>;
    }
    return (
        <Fragment>
            {items.map((challenge) => {
                return (
                    <Link
                        href={`/challenges/${challenge.id}`}
                        passHref
                        key={challenge.id}
                    >
                        <ChallengeLink
                            active={
                                router.query["id"] === challenge.id.toString()
                            }
                            name={challenge.attributes.Title}
                            subtitle={challenge.attributes.Title}
                            key={challenge.id}
                        />
                    </Link>
                );
            })}
        </Fragment>
    );

    // console.log(challenges);
    // return sidebarItems(challenges);
}
