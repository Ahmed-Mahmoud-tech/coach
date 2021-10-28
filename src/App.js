  import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
  import './App.scss';

  import Auth from './Pages/Auth/Auth';
  import Profile from './Pages/Profile/Profile';
  
  function App() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Auth} exact/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </Router>
      </div>
    );
  }
  

  export default App;
