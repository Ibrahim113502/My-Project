import React from 'react';
import Myheader from '../header';
import FirstCarousel from './carosel';
import CardWithImage from './cards';
import Description from './description';
function HomePage() {
    return (
        <>
            <Myheader />
            <FirstCarousel />
            <Description />
            <CardWithImage />
        </>
    );
}
export default HomePage;