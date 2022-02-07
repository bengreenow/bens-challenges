import { getLayout } from "../../layouts/ChallengesLayout";
import { NextPageWithLayout } from "../_app";

const Challenges: NextPageWithLayout = () => {
    return <div>This is the default Challenge Page</div>;
};

Challenges.getLayout = getLayout;
export default Challenges;
