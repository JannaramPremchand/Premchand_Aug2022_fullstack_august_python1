import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarMenu from './components/Navbar';
import Addproblems from './components/Addproblems'
import Problemdetails from './components/Problemdetails';
import Showproblems from './components/Showproblems';
import Updateproblems from './components/UpdateProblems'
import Adminpanel from './components/Adminpanel';

function App() {
  return (
    <div className="App">
        <div>
          <Router>
          <NavbarMenu />
            <Switch>
            <Route exact path="/" component={Showproblems} />
            <Route exact path="/addproblems" component={Addproblems} />
            <Route exact path="/adminpanel" component={Adminpanel} />
              <Route exact path="/:id/update" component={Updateproblems} />
              <Route exact path="/:id/" component={Problemdetails} />
              
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
