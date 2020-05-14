import { useState, useEffect } from 'react';

function usePages(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(0);
    const dataStart = currentPage * itemsPerPage;
    
    const currentData = data.slice(dataStart, dataStart + itemsPerPage);

    const maxPages = Math.ceil(data.length / itemsPerPage);

    useEffect(()=>{
        setCurrentPage(0);
    },[data]);

    useEffect(() => {
        const interval = setInterval(() => {
          currentPage + 1 === maxPages ? setCurrentPage(0): setCurrentPage(currentPage + 1);
        }, 10000);
        return () => {
            clearInterval(interval);
        };
      }, [data, currentPage, maxPages]);

      return {currentData, currentPage, maxPages, setCurrentPage};
};

export default usePages;