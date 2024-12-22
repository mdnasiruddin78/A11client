import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Partners from "../components/Partners";
import FaqGallery from "../components/FaqGallery";
import Contract from "../components/Contract";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HOME</title>
            </Helmet>
            <section>
                <Banner></Banner>
            </section>
            <section></section>
            <section>
                <Partners></Partners>
            </section>
            <section>
                <FaqGallery></FaqGallery>
            </section>
            <section>
                <Contract></Contract>
            </section>
        </div>
    );
};

export default Home;