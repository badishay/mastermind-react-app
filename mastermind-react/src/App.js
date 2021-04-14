import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Main from './components/Main'
import Game from './components/Game'

function App() {
  return (
    <div>
     <Switch  style={{width:'100vw', height:'100%'}} >

          <Route exact path='/'>
            <Main/> 
          </Route>

          <Route  path='/game/:numberOfoptionalColors' >
              <Game/>
          </Route>


          <Route path='*' >
              <p className='text-4xl text-center text-red-900  pt-32 font-thin tracking-wide'>
                page not found :(
              </p>
          </Route>

        </Switch>
    </div>
  )
}

export default App
