import React, { useState,useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import SearchBar from './components/SearchBar/SearchBar';
import Today from './components/Today/Today';
import OtherDays from './components/OtherDays/OtherDays';
import './App.scss';

function App() {
  const [inpSearch, setInpSearch] = useState('Algeria');
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState('');

  const searchHandler = (inp) => {
    setInpSearch(inp);
  }
  const fetchWeatherData = () => {
    fetch(`/weather?city=${inpSearch}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Could not fetch data from the server');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
            })
            .catch(err => {
                setError(err);
                setData(null);
            })
            .finally(() => {
                setPending(false);
            })
  };

  useEffect(() => {
    fetchWeatherData();
  }, [inpSearch]);
  const errorMarkup = (<div className="error-container">Error 404 Not Found</div>);

  return (
    <div className="container">
      <h1 className='title'>Weatherino</h1>
      {pending ? <Spinner animation="border" variant="primary" size="lg" className="spin" /> : (<div className="App">
        <SearchBar searchHandler={searchHandler} />
        {(error || !data.list ) ? errorMarkup : (<>
          <Today Tweather={data.list[0]} city={data.city.name} />
          <OtherDays OthWeather={data} />
        </>
        )}

      </div>)}
    </div>


  );
}

export default App;
