import React from "react";
import "./App.css";
import "./theme.css";
import "./custom.css";
import Header from "./Header";
import history from "./history";
import searchhistory from "./Pages/searchhistory";
import compare from "./Pages/compare";
// import home from "./Pages/home";
import Initialize from "./Pages/Initialize";
import Menu from "./Menu/Menu";

import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Search from "./Search/search";

class App extends React.Component {
  state = {
    searchTerm: ''
  };
  searchTerm = value => {
    console.log(value);
    this.setState({ searchTerm: value });
  };
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Header />
          <div></div>
          <div></div>
          <br />
          <Search searchTerm={this.searchTerm} />
          <Menu searchTerm={this.state.searchTerm} />
          <Switch>
            {/* <Route path="/" exact component={home}/> // not required at present */}
            <Route path="/api/initialize/:id" exact component={Initialize} />
            <Route
              path="/api/dashboard/:companyname"
              exact
              component={Dashboard}
            />
            <Route path="/api/searchhistory" exact component={searchhistory} />
            <Route path="/api/compare" exact component={compare} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
