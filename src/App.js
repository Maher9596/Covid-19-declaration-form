import Home from '../src/Home'
import Submitted from './Pages/Submitted'
import {Switch, Route} from 'react-router-dom'
import './App.css'



function App() {
  return (
    <div>   <Switch>
              <Route exact path = "/">
                <Home />     
              </Route>
              <Route  path ="/submitted">
                <Submitted />
              </Route>
            </Switch>   
    </div>
  )
}

export default App
