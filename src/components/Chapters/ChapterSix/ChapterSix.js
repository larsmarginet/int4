import React from 'react';
import { useStore } from '../../../hooks/UseStore';
import { useHistory } from 'react-router-dom';

const ChapterSix = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[5].unlocked === false) {
        history.push('/');
    } 
    
    return (
        <p>Deel 6</p>
    )
}

export default ChapterSix;