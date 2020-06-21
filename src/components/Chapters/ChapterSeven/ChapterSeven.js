import React from 'react';
import { useStore } from '../../../hooks/UseStore';
import { useHistory } from 'react-router-dom';

const ChapterSeven = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[6].unlocked === false) {
        history.push('/');
    } 
    
    return (
        <div>
            <object data="./assets/leugendetector.svg" aria-label='leugendetector'></object>
        </div>
    )
}

export default ChapterSeven;