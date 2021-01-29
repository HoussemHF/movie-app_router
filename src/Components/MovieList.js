import React from 'react';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';

const MovieList = (props) => {
    const {serieslist, setseries} = props
    const handleOk = (addTerm) => {setseries([...serieslist, addTerm]);
  };

return( 
    <div>
        <AddMovie onOk={handleOk}/>
        <div className='series-container'>{serieslist.map((el,i) => (<MovieCard key={i} item={el}/>))}</div>
    </div>)
}

export default MovieList;