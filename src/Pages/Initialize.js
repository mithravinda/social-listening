import React, { Component } from "react";
import axios from "axios";

const json={
    "Trends": [
      {
        "industryId": 2,
        "name": "Thomson Reuters",
        "description": null,
        "enterpriseId": 10,
        "industryName": "Finance"
      },
      {
        "industryId": 5,
        "name": "TATA",
        "description": null,
        "enterpriseId": 6,
        "industryName": "Automobiles"
      },
      {
        "industryId": 1,
        "name": "Infosys",
        "description": null,
        "enterpriseId": 7,
        "industryName": "Information Technology"
      },
      {
        "industryId": 1,
        "name": "Google",
        "description": null,
        "enterpriseId": 8,
        "industryName": "Information Technology"
      },
      {
        "industryId": 1,
        "name": "Facebook",
        "description": null,
        "enterpriseId": 9,
        "industryName": "Information Technology"
      },
      {
        "industryId": 1,
        "name": "Deloitte",
        "description": null,
        "enterpriseId": 2,
        "industryName": "Information Technology"
      },
      {
        "industryId": 3,
        "name": "Driscoll's",
        "description": null,
        "enterpriseId": 3,
        "industryName": "Agriculture"
      },
      {
        "industryId": 2,
        "name": "Bloomberg",
        "description": null,
        "enterpriseId": 4,
        "industryName": "Finance"
      },
      {
        "industryId": 4,
        "name": "Reliance",
        "description": null,
        "enterpriseId": 5,
        "industryName": "Energy"
      },
      {
        "industryId": 1,
        "name": "Enquero",
        "description": null,
        "enterpriseId": 1,
        "industryName": "Information Technology"
      }
    ],
    "SearchHistory": [
      {
        "industryId": 1,
        "enterpriseName": "Enquero",
        "userId": 1
      },
      {
        "industryId": 5,
        "enterpriseName": "TATA",
        "userId": 1
      },
      {
        "industryId": 2,
        "enterpriseName": "Bloomberg",
        "userId": 1
      }
    ]
  }

class Initialize extends Component {
  state = {
    trends: json.Trends,
    searchhistory: json.SearchHistory
  };

  componentDidMount() {
    // axios
    //   .get(`http://hackton.us-e2.cloudhub.io/api/initialize`, {
    //     headers: {
    //       "Access-Control-Allow-Origin": true
    //     }
    //   })
    //   .then(res => {
    //     const rows = res;
    //     this.setState({
    //       trends: rows.Trends,
    //       searchhistory: rows.SearchHistory
    //     });
    //   });
  }

  renderTrends = () => {
    if (this.state.trends) {
      return this.state.trends.map(row => {
        return (
          <div className="card" key={row.enterpriseId}>
            <div className="content">
              <div className="header">{row.name}</div>
              <div className="meta">{row.industryName}</div>
              <div className="description">{row.description}</div>
            </div>
          </div>
        );
      });
    }
    return null;
  };

  renderSearchHistory = () => {
    if (this.state.searchhistory) {
      return this.state.searchhistory.map(row => {
        return (
          <div className="card" key={row.industryId}>
            <div className="content">
              <div className="header">{row.enterpriseName}</div>
            </div>
          </div>
        );
      });
    }
    return null;
  };

  render() {
    return (
      <div className="ui container">
        <br/><br></br>
        <div className="ui cards">
          <h1>Trending <i className="chart line icon"></i></h1><br></br>
          {this.renderTrends()}
          </div>
        <div className="ui cards" style={{ float: "right" }}>
          <h1>Search History<i className="history icon"></i></h1>
          {this.renderSearchHistory()}
        </div>
      </div>
    );
  }
}

export default Initialize;
