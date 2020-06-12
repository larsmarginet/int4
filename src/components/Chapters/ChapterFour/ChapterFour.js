import React from 'react';
import { useStore } from '../../../hooks/UseStore';
import { useHistory } from 'react-router-dom';

const ChapterFour = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[3].unlocked === false) {
        history.push('/');
    } 
    
    return (
        <p>Deel 4</p>
    )
}

export default ChapterFour;