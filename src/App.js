import { AccessAlarm, ProductionQuantityLimitsTwoTone } from '@mui/icons-material'
import { Badge } from '@mui/material';
import Topbar from './components/topbar/Topbar';
import './appbar.scss'
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import User from './pages/user/User';
import SingleUser from './pages/singleuser/SingleUser';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (

    <div className="appbar">
      <Router>

        <div className="top">
          <Topbar />
        </div>

        <div className="bigo">
          <div className="todaside">
            <Menu />
          </div>

          <div className="middlestuff">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/user">
                <User />
              </Route>
              <Route exact path="/user/:id">
                <SingleUser />
              </Route>
              <Route path="/newuser">
                <NewUser />
              </Route>
              <Route exact path="/productlist">
                <ProductList/>
              </Route>
              <Route exact path="/product/:id">
                <Product/>
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </Switch>
          </div>
        </div>

      </Router>



    </div>

  );
}

export default App;
