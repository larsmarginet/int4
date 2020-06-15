import React from 'react';
import useWindowSize from "../../../hooks/useWindowSize";
import HomeMap from "../../Maps/HomeMap/HomeMap";
import {PinchView} from 'react-pinch-zoom-pan';

const Home = () => {
    const {width, height} = useWindowSize();
    const ratio = (height - 80 )/width;
    return (
        <section>
            <h2 style={{display: "none"}}>Overzicht</h2>
           <PinchView backgroundColor='#3F7AD3' maxScale={3} containerRatio={ratio*100}>
                <HomeMap />
           </PinchView>
        </section>
    )
}

export default Home;