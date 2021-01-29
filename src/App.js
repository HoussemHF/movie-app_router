import './App.css';
import {useState} from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import Films  from './Films';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trailer from './Components/Trailer';

function App() {
  const [series, setseries] = useState(Films);
  const [rateValue, setRateValue] = useState(5);
  const [inputFilter, setInputFilter] = useState('');
  const filterHandler = (searchTerm) => {setInputFilter(searchTerm);}

  return (
    <div className="App">
      <Router>
        <Filter ratevalue={rateValue} setratevalue={setRateValue} searching={filterHandler}/>
        <Switch>
        <Route path="/series/:id" component={(props) => <Trailer {...props} serieslist={series} />} />  
        </Switch>
        <MovieList serieslist={series.filter(el => el.rate <= rateValue && el.title.toLocaleLowerCase().includes(inputFilter.toLocaleLowerCase()))} setseries={setseries} />
      </Router>
    </div>
  );
}

export default App;