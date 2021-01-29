import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'antd';

const Trailer = (props) => {
    const {serieslist,match} = props
    let series = serieslist.find(el => el.title === match.params.id);
    let descriptionFilms;
    let trailerFilms;
    if(series)
        descriptionFilms = <><p>{series.description}</p></>
        trailerFilms = <><iframe title={series.title} width="560" height="315" src={series.trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></>
    return (
        <div className='series-page' style={{textAlign:'center'}}>
            <Link to='/'>
                <Button style={{marginBottom:20,width:200, height:50, color:'black', fontSize: 16, fontWeight:'600'}}>Close Trailer Page</Button>
            </Link>
            <div style={{color:'white', fontSize:20, fontWeight:'600', borderRadius:'4px solid black'}}>
                {trailerFilms}
                <br></br>
                <h1>Description :</h1>
                {descriptionFilms}
            </div>
        </div>
    )
}
  
  export default Trailer;