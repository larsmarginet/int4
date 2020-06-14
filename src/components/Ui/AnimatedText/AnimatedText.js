import React from 'react';
import { Wave } from 'react-animated-text';

const AnimatedText = ({ text, paused }) => {

    return (
        <Wave
            text={text}
            effect="verticalFadeIn"
            effectChange={.5}
            effectDirection='down'
            iterations={1}
            speed={40}
            paused={paused}
      />
    )
}

export default AnimatedText;