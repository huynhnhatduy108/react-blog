import React from 'react';
import "./style.css";

function NoData(props) {
  const {size ="medium"} = props;
  return (
    <div className='nodata'>
      <div className='nodata_container'>
        <i className={`fa-solid fa-database nodata__icon-${size}`}></i>
      </div>
      <div className={`nodata__text-${size}`}>No Data</div>
    </div>
  )
}

export default NoData