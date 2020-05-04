import React from "react";
import HomePage from "./components/HomePage";
import CompanyProducts from "./components/CompanyProducts";
import ProductPage from "./components/ProductPage";
import List from "./components/List";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company_logo: "/images/microsoft_logo.png",
      company_products: [
        {
          id: 1,
          name: "Windows OS",
          logo: "/images/windows_os.jpg",
        },
        {
          id: 2,
          name: "Microsoft Office",
          logo: "/images/Office.png",
        },
        {
          id: 3,
          name: "Windows Phone",
          logo: "/images/w_phone.jpg",
        },
        {
          id: 4,
          name: "Visual Studio",
          logo: "/images/vs_studio.jpg",
        },
      ],
    };
  }

  render() {
    let { company_logo, company_products } = this.state;
    return (
      <div className="App">
        <Router>
          <Link to="/" className="page-links">
            Home
          </Link>
          <Link to="/products" className="page-links">
            Company Products
          </Link>
          <Switch>
            <Route path="/product/:productid">
              <ProductPage products={company_products}></ProductPage>
            </Route>
            <Route path="/products">
              <CompanyProducts>
                <List list={company_products}></List>
              </CompanyProducts>
            </Route>
            <Route path="/">
              <HomePage name="Microsoft" logo_src={company_logo}></HomePage>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
