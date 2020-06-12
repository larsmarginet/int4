import React from 'react';
import { useStore } from '../../../hooks/UseStore';
import { useHistory } from 'react-router-dom';

const ChapterEight = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[7].unlocked === false) {
        history.push('/');
    } 
    
    return (
        <p>Deel 8</p>
    )
}

export default ChapterEight;