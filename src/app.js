'use strict'

import React, {Component} from 'react';
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax';


class App extends Component 
{ 

  constructor(){
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  getGitHubUrl(username, type) {
    const iType = type ? `/${type}` : '';
    const iUser = username ? `/${username}` : '';
    return `https://api.github.com/users${iUser}${iType}`
  }

  getRepos(type){
    return () => {
      const username = this.state.userinfo.login;
      ajax().get(this.getGitHubUrl(username, type)).
      then((result) => {
        this.setState({
          [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url            
          }))
        })
      });
    }
  }
  
  handleSearch(e){
    const keyCode = e.keyCode;
    const value = e.target.value;
    
    if (keyCode === 13)
    {
      this.setState({
        isFetching: true
      })
      ajax().get(this.getGitHubUrl(value)).
      then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })        
      }).always(() => {this.setState({isFetching: false})});
    }
  }


  render(){ 
    return <AppContent 
      {...this.state}
      handleSearch= {(e) => this.handleSearch(e)}
      getRepos = {this.getRepos('repos')}    
      getFav = {this.getRepos('starred')}    
    />
  }
}

export default App;
