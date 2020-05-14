import React from 'react';
import './Loading.scss';

function Loading() {
    return (
        <div className='loading'>
            <div className='spinner'></div>
            <span>Loading...</span>
        </div>
    )
};

export default Loading;