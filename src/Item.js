import React from 'react';
import Logo from './logo.svg';

function Item({data}) {
    return (
            <div className={`Item Item--${data.status}`}>
                <div className='col col-max'><img src={Logo}></img></div>
                <div className='col-l'><div className='name'>{data.product_name}</div></div>
                <div className='col'><div className='category'><div>Category:</div>{data.category}</div></div>
                <div className='col'><div className='size'><div>Size:</div>{data.size}</div></div>
                <div className='col'><div className='colour'><div>Colour:</div>{data.colour}</div></div>
                <div className='col'><span className='initials'>{data.customer_initials}</span></div>
            </div>
    );
};

export default Item;