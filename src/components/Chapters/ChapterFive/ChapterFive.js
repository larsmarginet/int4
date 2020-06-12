import React from 'react';
import { useStore } from '../../../hooks/UseStore';
import { useHistory } from 'react-router-dom';

const ChapterFive = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[4].unlocked === false) {
        history.push('/');
    } 
    
    return (
        <p>Deel 5</p>
    )
}

export default ChapterFive;