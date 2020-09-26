import React from 'react';
import './style.css';

function SubHeader(props) {
  const { totalCountForSearchedData,lastSearchText } = props
  return (
    <div className='subHeaderRoot'>
      <p className='searchTitleResult'>{totalCountForSearchedData} found for "{lastSearchText}". </p>
    </div>
  );
}

export default SubHeader;
