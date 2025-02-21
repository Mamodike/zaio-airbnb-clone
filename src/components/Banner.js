import React, { useState } from 'react';
import { Button } from '@mui/material';
import Search from './Search';
import './Banner.css';

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  
  return (
     <div className='banner'>
      <div className='banner-search'>
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className='banner-search-btn'
          variant='outlined'
        >{ showSearch ? 'Hide': 'Search Dates'}</Button>
      </div>
      <div className='banner-info'>
        <h1> Get out and stretch your imagination</h1>
        <h5>Plan a different kind of gateways to uncover the hidden gems near you.</h5>
        <Button variant='outlined'>Explore nearby</Button>
      </div>
    </div>
  )
}

export default Banner;
