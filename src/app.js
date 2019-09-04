'use strict'

import React, {Component} from 'react'

class App extends Component 
{ 

  render(){ 
    return(
      <div className='app'>
        <div className='user-info'>
          <img src='#' />
          <h1>
            <a href='#'>Teste</a>
          </h1>
          <ul className='repos-info'>
            <li>Repositorios</li>
            <li>Seguidores</li>
            <li>Seguindoo</li>
          </ul>

          <div className='actions'>
            <button>Ver Repositorios</button>
            <button>Ver favoritos</button>
          </div>

          <div className='repos'>
            <h2>Repositorios:</h2>
            <ul>
              <li><a href='#'>Nome</a></li>
            </ul>
          
            <ul className='starred'>
              <li><a href='#'>Nome Favorito</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
