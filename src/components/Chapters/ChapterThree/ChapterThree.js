import React from 'react';
import { useStore } from '../../../hooks/UseStore';
import { useHistory } from 'react-router-dom';
import Button from '../../Ui/Button/Button';
import style from './ChapterThree.module.css';

const ChapterThree = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[2].unlocked === false) {
        history.push('/');
    } 
    
    return (
        <main className={style.wrapper}>
            <h2 style={{display: "none"}}>Deel 3</h2>
            <p className={style.text}>under construction</p>
            <Button
                action={() => {
                    store.arts[0].levels[2].setDone();
                    history.push("/overview")
                    store.update()
                }} 
                button={"button"} 
                content={<span className={style.btnText}>Naar overzicht</span>} 
                height={86}/>
        </main>
    )
}

export default ChapterThree;