import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.scss';

const SearchBar = (props) => {
    const sIcon = (<FontAwesomeIcon icon={['fas', 'search']} style={{ color: '#0487e2' }} />);
    const [inpSearch, setInpSearch] = useState('');
    const keyHandler = (e) => {
        if (e.keyCode === 13) {
            props.searchHandler(inpSearch);
        }
    }
    return (
        <div className='search-box'>
            <input type="text" className='inp-search' onChange={(e) => setInpSearch(e.target.value)} onKeyDown={(e) => keyHandler(e)} />
            <button className='search-btn' onClick={() => props.searchHandler(inpSearch)}  >{sIcon}</button>
        </div>
    )
}

export default SearchBar