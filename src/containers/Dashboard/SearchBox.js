import React, { Component } from 'react';
import style from './style.module.css'
const SearchBox = (props)=>{
return(
<input  className={style.searchproduct}
        type = " text"
        placeholder="Search For Product "
        onChange={props.handleChange}
        />)

}
export default SearchBox;