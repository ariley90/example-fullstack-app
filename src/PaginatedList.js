import React from 'react';
import Item from './Item.js';
import usePages from './PaginatedListHook';
import './PaginatedList.scss';

function PaginatedList({data, itemsPerPage=4}) {
    const {currentData, currentPage, maxPages, setCurrentPage} = usePages(data,itemsPerPage);
    
    const pageIcons = [];
    for (let i = 0; i < maxPages; i++) {
        pageIcons.push(<PageIcon key={i} current={i===currentPage} clickHandler={() => setCurrentPage(i)}/>)
    }

    return (
        <div className="PaginatedList">
            <div className="PaginatedList__Data">
                    {currentData.map((item) => <Item key={item._id} data={item}/>)}
            </div>
            <div className="PaginatedList__Icons">
                {pageIcons}
            </div>
            <div className="PaginatedList__PageNumbers">
                <span className='current'>0{currentPage + 1}</span><span className='pipe'>|</span><span>0{maxPages}</span>
            </div>
        </div>
    );
};

function PageIcon({current, clickHandler}) {
    return (
        <div className={`Icon ${current ? 'Icon--current':''}`}onClick={clickHandler}>
        </div>  
    );
};
    
export default PaginatedList;