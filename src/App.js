import './App.css';
import Home from './views/Home/Home.jsx';
import Welcome from './views/Wellcome/Welcome';
import NotFound from './views/NotFound/NotFound';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Profile from './views/Profile/Profile';


function App() {

  return (
    <BrowserRouter>
      <Switch> 
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={Welcome} />
        <Route exact path='/profile' component={Profile} />
        <Route  path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
