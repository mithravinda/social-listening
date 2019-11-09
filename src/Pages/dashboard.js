import React, { Component } from "react";
import axios from "axios";
import "./dashboard.css";

class Dashboard extends Component {
  state = {
    company: "",
    posts: [
      {
        postId: "1",
        description: "asdhkjdshfds",
        reaction: "positive",
        handle: "facebook"
      },
      {
        postId: "2",
        description: "asdhkjdshfds",
        reaction: "negative",
        handle: "facebook"
      },
      {
        postId: "3",
        description: "asdhkjdshfds",
        reaction: "neutral",
        handle: "twitter"
      }
    ],
    facebookHandler: [
      { activity: "high", reaction: "positive", hashtags: "#abs #fds" }
    ],
    twitterHandler: [
      { activity: "low", reaction: "neutral", hashtags: "#abs #fds" }
    ],
    glassDoorHandler: [
      { activity: "none", reaction: "negative", hashtags: "#abs #fds" }
    ]
  };

  searchTerm = value => {
    this.setState({ company: value });
  };

  componentDidMount() {
    if (this.state.company) {
      axios
        .all([
          axios.get(
            "http://hackton.us-e2.cloudhub.io/api/dashboard/" +
              this.state.company
          ),
          axios.get(
            "http://hackton.us-e2.cloudhub.io/api/dashboard/" +
              this.state.company +
              "/facebookHandler"
          ),
          axios.get(
            "http://hackton.us-e2.cloudhub.io/api/dashboard/" +
              this.state.company +
              "/twitterHandler"
          ),
          axios.get(
            "http://hackton.us-e2.cloudhub.io/api/dashboard/" +
              this.state.company +
              "/glassDoorHandler"
          )
        ])
        .then(
          axios.spread(function(
            company,
            facebookHandler,
            twitterHandler,
            glassDoorHandler
          ) {
            this.setState({
              company,
              facebookHandler,
              twitterHandler,
              glassDoorHandler
            });
          })
        );

      axios.get("");
    }
    else {
        return (<p>Please enter Company's Name</p>);
    }
  }

  renderPosts = handle => {
    if (this.state.posts) {
      return this.state.posts.map(row => {
        return row.handle === "handle" ? (
          <h1>
            <div className="ui grid">
              <div className="five wide column"></div>
              <div className="ui card">
                <div className="content">
                  <div className="header">{row.description}</div>
                  <div className="description">{row.description}</div>
                </div>
              </div>
            </div>
          </h1>
        ) : null;
      });
    } else {
      return null;
    }
  };

  renderFacebook = () => {
    return this.state.facebookHandler.map(row => {
      var color =
        row.reaction === "high"
          ? "success"
          : row.reaction === "low"
          ? "red"
          : row.reaction === "medium"
          ? "yellow"
          : "grey";
      const handle = "facebook";
      return (
        <h1>
          <div className="content">
            <div className={`ui progress ${color}`}>
              <div className="bar"></div>
            </div>
            <div className="ui card" onClick={this.renderPost}>
              <div className="header" style={{ color: "blue" }}>
                <i className="facebook f icon"></i>
                <p>Facebook</p>
              </div>
              <div className="description">
                <p>{row.activity}</p>
                <p style={{ color: "blue" }}>{row.hashtags}</p>
              </div>
            </div>
          </div>
        </h1>
      );
    });
  };

  renderTwitter = () => {
    return this.state.twitterHandler.map(row => {
      var color =
        row.reaction === "high"
          ? "green"
          : row.reaction === "low"
          ? "red"
          : row.reaction === "medium"
          ? "yellow"
          : "white";
      const handle = "twitter";
      return (
        <h1>
          <div>
            <div className={`ui ${color} progress`} style={{width: '74%'}}>
              <div className="bar"></div>
            </div>

            <div className="ui card" onClick={this.renderPosts}>
              <div className="header" style={{ color: "blue" }}>
                <i className="twitter t icon"></i>
                <p>Twitter</p>
                <div className="description">
                  <p>{row.activity}</p>
                  <p style={{ color: "blue" }}>{row.hashtags}</p>
                </div>
              </div>
            </div>
          </div>
        </h1>
      );
    });
  };

  renderGlassdoor = () => {
    return this.state.glassDoorHandler.map(row => {
      var color =
        row.reaction === "high"
          ? "green"
          : row.reaction === "low"
          ? "red"
          : row.reaction === "medium"
          ? "yellow"
          : "white";
      const handle = "glassdoor";
      return (
        <h1>
          <div>
            <div className={`ui progress ${color}`}>
              <div className="bar"></div>
            </div>
            <div className="ui card" onClick={this.renderPosts}>
              <div className="header">
                <i>
                  <img
                    src="https://www.betterteam.com/i/glassdoor-1024x512-20171115.jpg"
                    alt="glassdoor"
                    height="55px"
                  />
                </i>
                <p style={{ color: "green" }}>Glassdoor</p>
                <div className="description">
                  <p>{row.activity}</p>
                  <p style={{ color: "blue" }}>{row.hashtags}</p>
                </div>
              </div>
            </div>
          </div>
        </h1>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="ui cards"></div>
        <div className="ui grid" style={{ margin: "15px" }}>
            {this.warning? <p>Please Enter Comapny's Name</p>:
            <div>
                <div className="five wide column">{this.renderFacebook()}</div>
                <div className="five wide column">{this.renderTwitter()}</div>
                <div className="five wide column">{this.renderGlassdoor()}</div>
            </div>
            }          
        </div>
      </div>
    );
  }
}

export default Dashboard;
