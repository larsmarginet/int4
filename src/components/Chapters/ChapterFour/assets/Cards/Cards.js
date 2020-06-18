import React, {useState} from 'react';
import style from './Cards.module.css';

const Char = ({card, flip}) => {
    const [ open, setOpen ] = useState(false);

    return (
      <div className={style.Char}>
        <div className={style.Scene}>
          <div
            className={`${style.Card} ${open ? style.CardOpen : ""}`}
            onClick={() => {setOpen(!open); flip(!open)}}
          >
            <div className={`${style.CardFace} ${style.CardFaceFront}`}>
                <img className={style.image} src={`./assets/${card.back}.svg`} alt="kaart"/>
            </div>
            <div className={`${style.CardFace} ${style.CardFaceBack}`}>
                <img className={style.image} src={`./assets/${card.front}.svg`} alt="kaart"/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const Cards = ({notification}) => {
    const cards = [{
        front: "kaartFront1",
        back: "kaartBack1",
        flipped: false
    },{
        front: "kaartFront2",
        back: "kaartBack2",
        flipped: false
    },{
        front: "kaartFront3",
        back: "kaartBack3",
        flipped: false
    },{
        front: "kaartFront4",
        back: "kaartBack4",
        flipped: false
    },{
        front: "kaartFront5",
        back: "kaartBack5",
        flipped: false
    }]

    return (
        <div className={style.wrapper}>
          {cards.map((char, i) => (
              <Char
                flip={(val) => {
                    char.flipped = val; 
                    if(cards.every((card) => card.flipped === true)) {
                        notification();
                    }
                }}
                card={char}
                key={`${i}${char.front}`}
              /> 
          ))}
        </div>
    );
  };

  export default Cards;
