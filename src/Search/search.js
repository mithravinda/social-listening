import React, { Component } from 'react';
// import axios from 'axios';
import history from '../history';

const json = {
    "Enterprises": [
      {
        "enterpriseId": 2,
        "enterpriseName": "Deloitte"
      },
      {
        "enterpriseId": 5,
        "enterpriseName": "Reliance"
      },
      {
        "enterpriseId": 14,
        "enterpriseName": "Bharti Airtel"
      }
    ]
  }

class Search extends Component {
    state = { 
        searchTerm:'',
        warning:false
    }

    onChange = (event) => {
        this.setState({searchTerm: event.target.value, warning:false});
    }

    searchResults = async() => {
        // if(this.state.searchTerm){
        //     await axios.get('http://hackton.us-e2.cloudhub.io/api/search/' + this.state.searchTerm).then((data) => {
        //         return console.log(data.SearchHistory);
        //     })
        // }
        // else {
        //     this.setState({warning:true})
        // }
        history.push('/api/dashboard/' + this.state.searchTerm);
        this.props.searchTerm(this.state.searchTerm);
    }

    render() { 
        return ( 
            <div><center>
                <h1><div className="ui search">
                    <div className="ui icon input">
                        <input className="prompt" type="text" 
                        placeholder="Company Name" 
                        onChange={this.onChange} 
                        style={{float:'right'}} />
                        <i className="search icon"></i>                    
                    </div>
                    <button className="ui teal button" onClick={this.searchResults} style={{height:'55px',width:'150px', margin:'7px' }}><h1>Search</h1></button>
                    {this.state.warning? <p style={{color:'red'}}>Please enter Company's Name to search</p>:null}
                    
                </div></h1>
                </center>
            </div>
         );
    }
}
 
export default Search;