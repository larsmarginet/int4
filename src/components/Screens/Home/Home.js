import React from 'react';
import useWindowSize from "../../../hooks/useWindowSize";
import HomeMap from "../../Maps/HomeMap/HomeMap";
import {PinchView} from 'react-pinch-zoom-pan';

const Home = () => {
    const {width, height} = useWindowSize();
    const ratio = (height - 81 )/width;
    return (
        <section  >
           <PinchView backgroundColor='#3F7AD3' maxScale={3} containerRatio={ratio*100}>
                <HomeMap width={width}  height={height}/>
           </PinchView>
        </section>
    )
}

export default Home;