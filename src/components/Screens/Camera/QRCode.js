import React from "react";
import Camera from "./Camera";
import CameraLegacy from "./CameraLegacy";

const QRCode = () => {
    if(navigator.getUserMedia){
        return <Camera />
      } else {
        return <CameraLegacy />
    }
} 

export default QRCode;