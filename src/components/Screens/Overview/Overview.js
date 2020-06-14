import React from 'react';
import useWindowSize from "../../../hooks/useWindowSize";
import MacroMap from "../../Maps/MacroMap/MacroMap"
import {PinchView} from 'react-pinch-zoom-pan'

  
const Overview = () => {
  const {width, height} = useWindowSize();
    const ratio = (height - 81)/width;
    return (
        <section  >
           <PinchView backgroundColor='#3F7AD3' maxScale={3} containerRatio={ratio*100}>
                <MacroMap width={width}  height={height}/>
           </PinchView>
        </section>
    )
}

export default Overview;