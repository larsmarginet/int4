import React from 'react';
import useWindowSize from "../../../hooks/useWindowSize";
import HomeMap from "../../Maps/HomeMap/HomeMap";

const Home = () => {
    const {width, height} = useWindowSize();
    return (
        <main style={{ overflow: 'scroll', width: '100%', height: (height-80)}}>
            <h2 style={{display: "none"}}>Overzicht</h2>
            <HomeMap width={width} height={height}/>
        </main>
    )
}

export default Home;