import React from 'react';
import './Loading.scss';

function Loading() {
    return (
        <div className='Loading'>
            <div className='Loading__spinner'></div>
            <span>Loading...</span>
        </div>
    )
};

export default Loading;