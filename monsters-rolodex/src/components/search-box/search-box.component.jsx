import { Component } from 'react';
import './search-box.styles.css';

const searchBox = (props) => {

    const {SearchChange,placeholder,className} = props;
    return(        
        <input 
            className={className}
            type ='search'
            placeholder={placeholder} 
            onChange={SearchChange}
        /> 
    )

}


export default searchBox