import React from 'react';
import Logo from './logo.svg';

import 'Item.scss';
import 'layout.scss';

function Item({data}) {
    return (
            <div className={`Item Item--${data.status}`}>
                <div className='col col-max'><img src={Logo}></img></div>
                <div className='col-l'><div className='Item__name'>{data.product_name}</div></div>
                <div className='col'><div className='Item__category'><div>Category:</div>{data.category}</div></div>
                <div className='col'><div className='Item__size'><div>Size:</div>{data.size}</div></div>
                <div className='col'><div className='Item__colour'><div>Colour:</div>{data.colour}</div></div>
                <div className='col'><span className='Item__initials'>{data.customer_initials}</span></div>
            </div>
    );
};

export default Item;