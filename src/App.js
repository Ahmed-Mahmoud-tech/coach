import './App.css';
import Home from './views/Home/Home.jsx';
import Welcome from './views/Wellcome/Welcome';
import {BrowserRouter , Route} from 'react-router-dom'
import Profile from './views/Profile/Profile';


function App() {

  return (
    <BrowserRouter>
    <Route exact path='/home' component={Home} />
    <Route exact path='/' component={Welcome} />
    <Route exact path='/profile' component={Profile} />
    </BrowserRouter>
  );
}

export default App;
