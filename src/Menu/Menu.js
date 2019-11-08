import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  state = { showMenuList: false };

  showMenuList = () => {
    this.setState({ showMenuList: !this.state.showMenuList });
  };

  render() {
    const menuList = (
      <h1 style={{ float: "right", color: "#eeeeee" }}>
        <div>
          <h1>
            <Link
              to={`/api/dashboard/${this.props.searchTerm}`}
              onClick={this.showMenuList}
            >
              DashBoard
            </Link>
          </h1>
        </div>

        <div>
          <h1>
            <Link to="/api/compare"onClick={this.showMenuList}>Compare</Link>
          </h1>
        </div>

        <div>
          <h1>
            <Link to="/api/searchhistory" onClick={this.showMenuList}>
              {" "}
              Search History
            </Link>
          </h1>
        </div>
      </h1>
    );
    return (
      <div>
        <div style={{ float: "right", color: "#eeeeee" }}>
          <img
            className=""
            src="../Images/download.png"
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
