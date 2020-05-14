import React, {useState} from 'react';
import PaginatedList from './PaginatedList';
import Legend from './Legend';

function Dashboard({data}) {
  const handleClick = (selectedFilter)=>{
    setStatusFilter(selectedFilter);
  }
  const [statusFilter, setStatusFilter] = useState('ALL');
  const determineFilter = item => statusFilter === 'ALL' ? item => item : item.status === statusFilter;
  const filteredData = data.filter(determineFilter);
  return (
    <div className="Dashboard">
      <Legend clickHandler={handleClick}/>
      <PaginatedList data={filteredData}/>
    </div>
  );
}

export default Dashboard;
