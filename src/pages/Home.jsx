import React,{useContext} from 'react';
import  Hero from '../components/Hero.jsx';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy.jsx'
import NewsletterBox from '../components/NewsletterBox.jsx'

function Home() {
    return (
        <div>
            <Hero/>
            <LatestCollection/>
            <BestSeller/>
            <OurPolicy/>
            <NewsletterBox/>

        </div>
    );
}

export default Home;