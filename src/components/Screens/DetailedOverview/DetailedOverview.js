import React from 'react';
import {PinchView} from 'react-pinch-zoom-pan';
import useWindowSize from "../../../hooks/useWindowSize";
import MicroMap from "../../Maps/MicroMap/MicroMap"
import style from "./DetailedOverview.module.css"
import Button from '../../Ui/Button/Button';
import { useHistory } from 'react-router-dom';


const DetailedOverview = () => {
    const {width, height} = useWindowSize();
    let history = useHistory();
    return (
        <section style={{ overflow: 'scroll', width: '100%', height: (height-80)}}>
            <h2 style={{display: "none"}}>Overzicht De Kruisoprichting</h2>
            <div className={style.button}>
              <Button
                action={() => history.goBack()}
                button={"square"} 
                content={
                    <img className={style.back} alt="arrow" src="./assets/arrow.svg" />
                } 
                height={86}/>
            </div>
            <MicroMap width={width} height={height}/>
        </section>
    )
}

export default DetailedOverview;