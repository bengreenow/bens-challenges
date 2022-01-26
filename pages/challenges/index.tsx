import type { NextPage } from "next";
import Link from "next/link";
import Wrapper from "../../components/Wrapper";
import ChallengeLink from "../../components/ChallengeLink";

const Home: NextPage = () => {
    return (
        <Wrapper>
            <div className="flex flex-row divide-white divide-x divide-opacity-70">
                <div className="w-2/5">
                    <ChallengeLink
                        name="Todo App"
                        subtitle="3 Subtasks"
                    ></ChallengeLink>
                </div>
                <div className="w-3/5 prose-slate px-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam harum sequi minus ab perspiciatis deleniti quaerat
                    eum quam similique alias, at suscipit ut eaque blanditiis
                    nulla illo eveniet consequuntur asperiores.
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;
