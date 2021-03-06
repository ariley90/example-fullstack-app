import React, {useState,useEffect} from 'react';
import './App.scss';
import Dashboard from './Dashboard';
import Loading from './Loading';
import getData from './getData';

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    getData().then(data => setFetchedData(data));
  }, []);

  return (
    <div className="App">
       {fetchedData.length > 0 ? <Dashboard data={fetchedData}/> : <Loading/>}
    </div>
  );
}

export default App;
