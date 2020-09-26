
import React, { useEffect, useState } from 'react';
import './style.css';
import {connect} from 'react-redux'


function Pagination(props) {

    return (
        <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>      
    );
}
  export default Pagination;