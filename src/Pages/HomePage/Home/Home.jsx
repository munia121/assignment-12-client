
import Promotions from "../../../Component/HomePageComponent/Promotions";
import TestFeatured from "../../../Component/HomePageComponent/TestFeatured";
import Personalized from "../../../Component/HomePageComponent/personalized/Personalized";
// import Personalized from "../../../Component/HomePageComponent/personalized/Personalized";
import Banner from "../Banner/Banner";

const Home = () => {


   
    return (
        <div className='py-12 '>
            <Banner></Banner>
            <div className="container mx-auto mt-44">
                <Promotions></Promotions>
            </div>
            <Personalized></Personalized>
            <TestFeatured></TestFeatured>
        </div>
    );
};

export default Home;