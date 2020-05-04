import React from "react";
import HomePage from "./components/HomePage";
import CompanyProducts from "./components/CompanyProducts";
import ProductPage from "./components/ProductPage";
import List from "./components/List";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

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
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: "$1000",
        },
        {
          id: 2,
          name: "Microsoft Office",
          logo: "/images/Office.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: "$350",
        },
        {
          id: 3,
          name: "Windows Phone",
          logo: "/images/w_phone.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: "$545.99",
        },
        {
          id: 4,
          name: "Visual Studio",
          logo: "/images/vs_studio.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: "$150",
        },
      ],
      searchQuery: "",
    };
  }

  onCompanySearch(searchQuery) {
    console.log(searchQuery);
    this.setState({ searchQuery: searchQuery });
  }

  render() {
    let { company_logo, company_products, searchQuery } = this.state;
    return (
      <div className="App">
        <Router>
          <div className="nav">
            <Link to="/" className="page-links">
              Home
            </Link>
            <Link to="/products" className="page-links">
              Products
            </Link>
          </div>
          <Switch>
            <Route path="/product/:productid">
              <ProductPage products={company_products}></ProductPage>
            </Route>
            <Route path="/products">
              <CompanyProducts>
                <Search
                  onUserType={(searchQuery) => {
                    this.onCompanySearch(searchQuery);
                  }}
                ></Search>
                <List list={company_products} searchQuery={searchQuery}></List>
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
