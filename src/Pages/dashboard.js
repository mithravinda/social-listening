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
        if(this.statecompany){
            axios.get('http://hackton.us-e2.cloudhub.io/api/'+ this.state.company).then((data) => {
                console.log(data);
            })
        }
    }

    renderPosts = () => {
        return (
            <div className="ui card">
                <div className="content">
                <div className="header">Enquero</div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        axios.get('').then((data)=>{
            this.setState({posts: data})
        })
    }

    render() { 
        return ( 
            <div className="ui cards">
                {this.renderPosts}
            </div>
         );
    }
}
 
export default Dashboard;