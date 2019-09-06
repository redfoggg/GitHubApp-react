'use strict';

import React from 'react';


const Search = ({handleSearch, isDisabled}) => (
    <div className='search'>
          <input type='search' placeholder='Digitar nome do usuario'
            onKeyUp = {handleSearch}
            disabled = {isDisabled}
          ></input>
          <button>Buscar</button>
    </div>
);

Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
    isDisabled: React.PropTypes.bool.isRequired
}

export default Search;