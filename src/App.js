import logo from './logo.svg';
import './App.css';
import Users from './user/pages/User';
import NewPlace from './places/pages/NewPlace';
import {BrowserRouter as Router,Redirect,Route, Switch} from 'react-router-dom';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/users"> <Users/> </Route>
        <Route path="/places"> <NewPlace/> </Route>
        <Redirect to="/"> </Redirect>
        </Switch>
    </Router>
  );
};

export default App;
