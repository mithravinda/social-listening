import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  state = { showMenuList: false };

  showMenuList = () => {
    this.setState({ showMenuList: !this.state.showMenuList });

  };

  render() {
    const menuList = (
        <h1>
        <div className="wrapper" style={{ float: "right", color: "#eeeeee", height:'1000px'}}>
        <nav id="sidebar">
            <ul className="list-unstyled components">
                <li className="active">
                    <Link
                    to={`/api/dashboard/${this.props.searchTerm}`}
                    onClick={this.showMenuList}
                    style={{color:'#008080', textDecoration:'none'}}
                    >
                    DashBoard
                    </Link>
                </li>
                <li>
                    <Link to="/api/compare"onClick={this.showMenuList} style={{color:'#008080', textDecoration:'none'}}>Compare</Link>
                </li>
                <li>
                    <Link to="/api/searchhistory" onClick={this.showMenuList} style={{color:'#008080', textDecoration:'none'}}>
                    Search History
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
        </h1>

    );
    return (
      <div id="overlay">
        <div style={{ float: "right", color: "#eeeeee" }}>
          <img
            height="50px"
            src="https://icon-library.net/images/three-line-menu-icon/three-line-menu-icon-11.jpg"
            alt="Hamburger Icon"
            onClick={this.showMenuList}
          ></img>
        </div>
        {this.state.showMenuList ? menuList : null}
      </div>
    );
  }
}

export default Menu;
