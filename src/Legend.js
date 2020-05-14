import React from 'react';
import './Legend.scss';

function Legend({clickHandler}) {
    return (
      <div className="Legend">
      <div className='item'onClick={()=> clickHandler('READY_TO_TRY')}><div className="try"></div>Ready to Try</div>
      <div className='item' onClick={()=> clickHandler('ON_THE_WAY')}><div className="way"></div>On the Way</div>
      <div className='item'onClick={()=> clickHandler('IN_QUEUE')}><div className="queue"></div>In the queue</div>
      <div className='item' onClick={()=> clickHandler('OUT_OF_STOCK')}><div className="out"></div>Out of Stock</div>
      <div className='item' onClick={()=> clickHandler('ALL')}>All</div>
    </div>
    );
  }
  
  export default Legend;