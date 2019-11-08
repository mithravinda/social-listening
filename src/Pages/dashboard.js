import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    state = { 
        company:'',
        posts:null
    }
    
    searchTerm = (value) => {
        this.setState({company:value});
    }

    componentDidMount(){
        if(this.state.company){
            axios.get('http://hackton.us-e2.cloudhub.io/api/'+ this.state.company).then((data) => {
                console.log(data);
                this.setState({posts:data})
            })
        }
    }

    renderPosts = () => {
        if(this.state.posts){
        return this.state.posts.map((row)=> {
            return(
                <div className="ui card">
                    <div className="content">
                    <div className="header">{row.name}</div>
                    <div className="description">{row.description}</div>
                    </div>
                </div>)
         } );}
         else{
             return null
         }
    }

    render() { 
        return ( 
            <div className="ui cards">
                {this.renderPosts()}
            </div>
         );
    }
}
 
export default Dashboard;