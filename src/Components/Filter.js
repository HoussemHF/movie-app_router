import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

const Filter = (props) => {
    const { ratevalue, setratevalue, searching } = props
    const ratingSetValueHandler = (nextValue) => {setratevalue(nextValue);}
    
    return (
        <div className='header' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' , backgroundColor: 'black', padding: '1rem', marginBottom: '1rem',}}>
            <div>
                <h1 style={{color: 'red', margin:'1em'}}> Watch SERIES </h1>
            </div>
            <div>
                <input type='text' onChange={e =>searching(e.target.value)} placeholder='Search Series'></input>
                <br></br>
                <div style={{color:'white', fontSize:'1.5em'}}> Filter : <Rate style={{fontSize : 30}} value={ratevalue} onChange={ratingSetValueHandler} allowClear={false}/></div>
            </div>
        </div>
    );
  }
export default Filter;  