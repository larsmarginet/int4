import React from 'react';
import Slider from 'infinite-react-carousel';
import style from "./Avatars.module.css";
import Button from "../../Ui/Button/Button"
import { useStore } from '../../../hooks/UseStore';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Avatar = () => {
    const store = useStore();
    const history = useHistory();
    const settings =  {
        prevArrow:<svg style={{marginLeft: "5rem", width: 80}} width="93" height="86" viewBox="0 0 93 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M92.2311 5.17676L6.9043 10.2575L10.632 81.0833L87.0125 85.4835L92.2311 5.17676Z" fill="#2E5A9C"/>
        <path d="M85.3268 0L0 5.08074L3.72767 75.9066L80.1082 80.3068L85.3268 0Z" fill="#3F7AD3"/>
        <path d="M39.8513 35.3186L77.6499 31.3568L74.9051 50.2541L37.4138 47.5108L37.4138 57.8743L7.23859 41.7195L39.8513 22.2119L39.8513 35.3186Z" fill="#FFF1F0"/>
        </svg>
        ,
        nextArrow: <svg style={{marginRight: "5rem", width: 80}} width="93" height="86" viewBox="0 0 93 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-1.52588e-05 5.17675L85.3268 10.2575L81.5991 81.0833L5.21853 85.4835L-1.52588e-05 5.17675Z" fill="#2E5A9C"/>
        <path d="M6.90428 -7.45951e-06L92.2311 5.08074L88.5034 75.9066L12.1228 80.3068L6.90428 -7.45951e-06Z" fill="#3F7AD3"/>
        <path d="M52.3797 35.3186L14.5811 31.3568L17.3259 50.2541L54.8172 47.5108L54.8172 57.8743L84.9924 41.7195L52.3797 22.2119L52.3797 35.3186Z" fill="#FFF1F0"/>
        </svg>
        
    };
    return (
        <>
        <section className={style.top}>
            <h2 className={style.title}>Kies een avatar</h2>
        </section>
        <section className={style.wrapper}>
            <h2 style={{display: "none"}}>Kies een avatar</h2>
            <Slider className={style.slider} { ...settings }>
                <div className={`${style.sliderItem} ${style.sliderItemPeter}`} >
                    <div className={style.button}>
                    <p className={style.name}>Peter Padweg</p>
                        <Button
                            action={() => {
                                store.setAvatar('peter');
                                history.push('/');
                                store.update();
                            }}
                            button={"button"} 
                            content={<span className={style.btnText}>Selecteer</span>} 
                            height={86}/>
                    </div>
                </div>
                <div className={`${style.sliderItem} ${style.sliderItemBeatrice}`} >
                    <div className={style.button}>
                    <p className={style.name}>Beatrice Blauwhart</p>
                        <Button
                            action={() => {
                                store.setAvatar('beatrice');
                                history.push('/');
                                store.update();
                            }}
                            button={"button"} 
                            content={<span className={style.btnText}>Selecteer</span>} 
                            height={86}/>
                    </div>
                </div>
                <div className={`${style.sliderItem} ${style.sliderItemJan}`} >
                    <div className={style.button}>
                    <p className={style.name}>Jan Jaapus</p>
                        <Button
                            action={() => {
                                store.setAvatar('jan');
                                history.push('/');
                                store.update();
                            }}
                            button={"button"} 
                            content={<span className={style.btnText}>Selecteer</span>} 
                            height={86}/>
                    </div>
                </div>                
            </Slider>
        </section>
        </>
    )
}

export default Avatar;