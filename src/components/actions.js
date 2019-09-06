'use strict';

import React, {PropTypes} from 'react';

const Actions = ({getRepos, getFav}) => (
    <div className='actions'>
        <button onClick={getRepos}>Ver Repositorios</button>
        <button onClick={getFav}>Ver favoritos</button>
    </div>

);

Actions.propTypes = {
    getRepos: PropTypes.func.isRequired,
    getFav: PropTypes.func.isRequired
}

export default Actions;