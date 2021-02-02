import Users from './components/Users'
import Profile from './components/Profile'
import {BrowserRouter} from "react-router-dom"
import { Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route path="/users" render={()=><Users/>}/>
      <Route path="/user/:userId?" render={()=><Profile/>}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
