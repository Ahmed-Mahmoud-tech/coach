import './App.css';
import Home from './views/Home/Home.jsx';
import Welcome from './views/Wellcome/Welcome';
import {BrowserRouter , Switch, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Switch>
    <Route exact path='/home' component={Home} />
    <Route exact path='/' component={Welcome} />
    </Switch> 
    </BrowserRouter>
  );
}

export default App;
