import React from 'react';
import useWindowSize from "../../../hooks/useWindowSize";
import MacroMap from "../../Maps/MacroMap/MacroMap";

  
const Overview = () => {
  const {width, height} = useWindowSize();
  return (
      <section style={{ overflow: 'scroll', width: '100%', height: (height-80)}}>
           <h2 style={{display: "none"}}>Overzicht De Kruisoprichting</h2>
              <MacroMap width={width} height={height}/>
        </section>
    )
}

export default Overview;