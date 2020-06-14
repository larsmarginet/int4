import React from 'react';
import {PinchView} from 'react-pinch-zoom-pan';
import useWindowSize from "../../../hooks/useWindowSize";
import MicroMap from "../../Maps/MicroMap/MicroMap"
import style from "./DetailedOverview.module.css"
import Button from '../../Ui/Button/Button';
import { useHistory } from 'react-router-dom';


const DetailedOverview = () => {
    const {width, height} = useWindowSize();
    let history = useHistory()
    const ratio = (height - 81)/width;
    return (
        <section>
            <div className={style.button}>
              <Button
                action={() => history.goBack()}
                button={"square"} 
                content={
                    <img className={style.back} alt="arrow" src="./assets/arrow.svg" />
                } 
                height={86}/>
            </div>
           <PinchView backgroundColor='#3F7AD3' maxScale={3} containerRatio={ratio*100}>
                <MicroMap width={width}  height={height}/>
           </PinchView>
        </section>
    )
}

export default DetailedOverview;