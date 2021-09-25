import './App.css';
import Home from './views/Home/Home.jsx';
import Welcome from './views/Wellcome/Welcome';
import {BrowserRouter , Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Route exact path='/home' component={Home} />
    <Route exact path='/' component={Welcome} />
    </BrowserRouter>
  );
}

export default App;
