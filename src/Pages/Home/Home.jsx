import Banner from "./Banner/Banner";
import Counter from "./OurImpact/Counter";
import PremiumCards from "./PremiumCard/PremiumCards";
import SuccessStories from "./SuccessStories/SuccessStories";
import WorksSection from "./WorksSection/WorksSection";

 

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <PremiumCards></PremiumCards>
            <WorksSection></WorksSection>
            <Counter></Counter>
            <SuccessStories></SuccessStories>
            
        </div>
    );
};

export default Home;