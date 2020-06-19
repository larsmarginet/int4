import React from "react";

const Progress = ({chapter}) => {
    return (
        <svg width="105" height="14" viewBox="0 0 105 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-9.53674e-07 13.125L13.125 12.2946L12.5516 0.71915L0.802719 -9.53674e-07L-9.53674e-07 13.125Z" fill="#F87980" opacity={chapter >= 1 ? 1 : .5}/>
            <path d="M24.0625 -9.53674e-07L24.8929 13.125L36.4684 12.5516L37.1875 0.802719L24.0625 -9.53674e-07Z" fill="#F87980" opacity={chapter >= 2 ? 1 : .5}/>
            <path d="M61.25 13.125L60.4196 -3.62968e-08L48.8441 0.573392L48.125 12.3223L61.25 13.125Z" fill="#F87980" opacity={chapter >= 3 ? 1 : .5}/>
            <path d="M83.125 0L70 0.830374L70.5734 12.4059L82.3223 13.125L83.125 0Z" fill="#F87980" opacity={chapter >= 4 ? 1 : .5}/>
            <path d="M91.875 -9.53674e-07L92.7054 13.125L104.281 12.5516L105 0.802719L91.875 -9.53674e-07Z" fill="#F87980" opacity={chapter >= 5 ? 1 : .5}/>
        </svg>
    )
}

export default Progress;