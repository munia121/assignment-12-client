import Promotions from "../../../Component/HomePageComponent/Promotions";
import Personalized from "../../../Component/HomePageComponent/personalized/Personalized";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className='py-12 '>
            <Banner></Banner>
            <div className="container mx-auto mt-44">
                <Promotions></Promotions>
            </div>
            <Personalized></Personalized>
        </div>
    );
};

export default Home;