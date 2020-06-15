import React from 'react';
import useWindowSize from "../../../hooks/useWindowSize";
import MacroMap from "../../Maps/MacroMap/MacroMap"
import {PinchView} from 'react-pinch-zoom-pan'

  
const Overview = () => {
  const {width, height} = useWindowSize();
    const ratio = (height - 80)/width;
    return (
        <section>
           <h2 style={{display: "none"}}>Overzicht De Kruisoprichting</h2>
           <PinchView backgroundColor='#3F7AD3' maxScale={3} containerRatio={ratio*100}>
                <MacroMap />
           </PinchView>
        </section>
    )
}

export default Overview;