import React from 'react';
import { useStore } from '../../../hooks/UseStore';
import { useHistory } from 'react-router-dom';

const ChapterThree = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[2].unlocked === false) {
        history.push('/');
    } 
    
    return (
        <p>Deel 3</p>
    )
}

export default ChapterThree;