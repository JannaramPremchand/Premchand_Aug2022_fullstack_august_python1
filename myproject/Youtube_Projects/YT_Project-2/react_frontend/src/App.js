import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarMenu from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import UpdateProducts from './components/UpdateProduct';
import AddProduct from './components/AddProduct';
import ShowProdcts from './components/ShowProduct'
function App() {
  return (
    <div className="App">
        <div>
          <Router>
          <NavbarMenu />
            <Switch>
            <Route exact path="/" component={ShowProdcts} />
              <Route exact path="/addStudent" component={AddProduct} />
              <Route exact path="/:id/update" component={UpdateProducts} />
              <Route exact path="/:id/" component={ProductDetails} />
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
