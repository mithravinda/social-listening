import React, { Component } from 'react';
import axios from 'axios';

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
        this.props.searchTerm(this.state.searchTerm);
    }

    render() { 
        return ( 
            <div>
                <div className="ui search">
                    <div className="ui icon input">
                        <input className="prompt" type="text" 
                        placeholder="Company Name" 
                        onChange={this.onChange} 
                        style={{float:'right'}} />
                        <i className="search icon"></i>                    
                    </div>
                    <button className="ui primary button" onClick={this.searchResults}>Search</button>
                    {this.state.warning? <p style={{color:'red'}}>Please enter Company's Name to search</p>:null}
                </div>
                
            </div>
         );
    }
}
 
export default Search;