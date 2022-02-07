import type { NextPage } from "next";
import Link from "next/link";
import Wrapper from "../components/Wrapper";

const Home: NextPage = () => {
    return (
        <Wrapper>
            <div className="flex items-center h-screen justify-center">
                <div className="flex flex-col max-w-prose gap-2">
                    Hello Joe Lorem, ipsum.
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;
