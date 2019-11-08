import React from 'react';
import GoogleAuth from './GoogleAuth';
import './header.css';

class Header extends React.Component{
    state={
        name:''
    }
    signIn = (currentuser) => {
        if(currentuser){
            this.setState({name:currentuser.Ab.w3.ofa});
        }
        else{
            this.setState({name:''});
        }
    }
    render(){
        return (
            <div className="header-header"> 
                <div className="header-img">                                            
                    <a href="/">
                        <img src="http://cline-company.com/wp-content/uploads/2012/08/social.png" 
                            alt="logo"/>
                    </a>
                    <h3>Social Listening</h3>
                    <div className="right menu">
                        {this.state.name}
                        <GoogleAuth getUser={this.signIn}/>
                    </div>
                    <div>
                        Search
                    </div>
                </div>
            </div>
        )
    
    }
}

export default Header;