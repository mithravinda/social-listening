import React from 'react';
import './App.css';
import './theme.css';
import './custom.css';
import Header from './Header';
import history from './history';
import searchhistory from './Pages/searchhistory';
import compare from './Pages/compare';
import home from './Pages/home';
import Initialize from './Pages/Initialize';
import Menu from './Menu/Menu';

import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Pages/dashboard';
import Search from './Search/search';

class App extends React.Component{
  render(){
    
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div></div>
        <div></div>
        <br/>
        <Search searchTerm={this.searchTerm}/>
        <Menu/>
        <Switch>
            {/* <Route path="/" exact component={home}/> // not required at present */}
            <Route path="/initialize/:id" exact component={Initialize}/>
            <Route path="/dashboard" exact render={(props) => <Dashboard {...props} isAuthed={true} />}/>
            <Route path="/searchhistory" exact component={searchhistory}/>
            <Route path="/compare" exact component={compare}/>
          </Switch>
        </Router>
    </div>
  );
  }
}

export default App;
