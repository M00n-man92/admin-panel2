import { AccessAlarm, ProductionQuantityLimitsTwoTone } from '@mui/icons-material'
import { Badge } from '@mui/material';
import Topbar from './components/topbar/Topbar';
import './appbar.scss'
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import User from './pages/user/User';
import SingleUser from './pages/singleuser/SingleUser';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';


function App() {
  var user = false

  const oldpeople = localStorage.getItem("persist:root")
  if (!oldpeople){
    user=true
  }
  else{
    const youngpeople = JSON.parse(oldpeople).user

    const people = JSON.parse(youngpeople).currentUser
    const problem = JSON.parse(youngpeople).error
    // console.log(problem)
    if (problem === true) {
      console.log("problem is treu")
      user = true
    }
  
  
    else if (people === null) {
      user = true
      // console.log("people are null")
  
    }
  
    else {
  
      const admin = people.data.isAdmin
  
      if (admin == false) {
  
        user = true
  
      }
      else {
  
        user = false
      }
  
    }
  
  
  
  }
  
  return (

    <div className="appbar">

      <Router>
        <Switch>
          <Route exact path="/login">
            {user ? <Login /> : <Redirect to='/' />}
          </Route>
          <>
            <div className="top">
              <Topbar />
            </div>

            <div className="bigo">
              <div className="todaside">
                <Menu />
              </div>

              <div className="middlestuff">

                <Route exact path="/">

                  {user ? <Redirect to='/login' /> : <Home />}
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
                  <ProductList />
                </Route>
                <Route exact path="/product/:id">
                  <Product />
                </Route>
                <Route path="/newproduct">
                  <NewProduct />
                </Route>

              </div>

            </div>
          </>
        </Switch>
      </Router>



    </div>

  );
}

export default App;
