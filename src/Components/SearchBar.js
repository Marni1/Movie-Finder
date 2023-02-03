import React from 'react'
import './SearchBar.css'

const SearchBar = ({ onKeyPress }) => {
    return (
        <div>
            <input
                type='text'
                placeholder='Enter movie name'
                className='searchBar'
                onKeyPress={onKeyPress}
            />
        </div>
    )
}

export default SearchBar;