import Link from "next/link";
import Wrapper from "../components/Wrapper";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
    return (
        <Wrapper>
            <div className="flex items-center h-screen justify-center">
                <div className="flex flex-col max-w-prose gap-2">
                    <h1 className="text-4xl font-bold">
                        Welcome to Ben&apos;s Challenges!
                    </h1>
                    <p>
                        If you&apos;ve landed here you&apos;re one of the lucky
                        few I&apos;ve let into my inner circle. <br />
                        jk it&apos;s just you Joe.
                    </p>
                    <Link href="/challenges/" passHref>
                        <button className="px-4 py-2 border-white border-2 transform hover:scale-105 transition-transform">
                            Go to the Challenges ›
                        </button>
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;
