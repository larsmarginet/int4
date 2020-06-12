import React from 'react';
import { useStore } from '../../../hooks/UseStore';
import { useHistory } from 'react-router-dom';

const ChapterTwo = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[1].unlocked === false) {
        history.push('/');
    } 
    
    return (
        <p>Deel 2</p>
    )
}

export default ChapterTwo;