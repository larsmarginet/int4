import React, { useLayoutEffect, useState } from 'react';
import MacroMap from "../../Maps/MacroMap/MacroMap"
import {PinchView} from 'react-pinch-zoom-pan'

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  
const Overview = () => {
    const [width, height] = useWindowSize();
    const ratio = (height - 91)/width;
    return (
        <section  >
           <PinchView backgroundColor='#3F7AD3' maxScale={3} containerRatio={ratio*100}>
                <MacroMap width={width}  height={height}/>
           </PinchView>
        </section>
    )
}

export default Overview;