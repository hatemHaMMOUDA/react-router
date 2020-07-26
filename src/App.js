import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Link,Switch,BrowserRouter} from "react-router-dom"
import Home from "./Home"
import Category from "./category"
import Products from "./products"
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <div className=" App">
        <nav className="navbar navbar-light">
          <ul calssName="nav navbar-nav">
            <li >
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Category</Link>
            </li>
            <li>
              <Link to="/category">Products</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
      </div>
    </BrowserRouter>
  );
}

export default App;
