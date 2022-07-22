import React from 'react';
import "./style.css";

function NoData() {
  return (
    <div className='nodata'>
      <div className='nodata_container'>
        <i className="fa-solid fa-database nodata__icon"></i>
      </div>
      <div className="nodata__text">No Data</div>
    </div>
  )
}

export default NoData