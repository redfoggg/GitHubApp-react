'use strict';

import React, {PropTypes} from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';


const AppContent = ({userinfo, repos, starred, handleSearch, getRepos, isFetching, getFav}) => (
    <div className='app'>

        <Search isDisabled={isFetching} handleSearch={handleSearch} />
        {isFetching && <div>Carregando...</div>}
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions getRepos = {getRepos} getFav = {getFav} />}
        

        {!!repos.length && <Repos className = 'repos' title = 'Repositórios: ' 
          repos={repos}
        />}       
        {!!starred.length && <Repos className = 'starred' title = 'Favoritos: ' 
          repos={starred}
        />}

      </div>
);

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    handleSearch: PropTypes.func.isRequired, 
    getRepos:PropTypes.func.isRequired, 
    isFetching:PropTypes.bool.isRequired, 
    getFav:PropTypes.func.isRequired
};


export default AppContent;