import React, { useEffect } from 'react';
import './style.css';

function SubHeader(props) {

useEffect(()=>{
//   console.log('-------->>>>>',props)
},[props])
 const {totalCountForSearchedData} = props
  return (
    <div className='subHeaderRoot'>
    <p className='searchTitleResult'>{totalCountForSearchedData} found for "{props.lastSearchText}". </p>
    </div>
  );
}


export default SubHeader;
