import React from 'react';
import GoogleAuth from './GoogleAuth';
import './header.css';
class Header extends React.Component{
    state={
        name:'',
        isloading:false
    }
    signIn = (currentuser) => {
        if(currentuser){
            this.setState({name:currentuser.Ab.w3.ofa, isloading: true});
            
        }
        else{
            this.setState({name:''});
        }
    }
    render(){
        return (
            <div className="ui container"> 
                <div className="header">
                    <div style={{backgroundColor: 'teal',color:'white'}}>
                        <h1>
                        <a href="/">
                            <img src="http://cline-company.com/wp-content/uploads/2012/08/social.png" 
                                alt="logo" height="70px" />
                        </a>Social Listening
                        <span style={{float:'right', marginRight:'50px'}}>
                            {this.state.name}
                            <GoogleAuth getUser={this.signIn}/>
                        </span>
                        
                        </h1>                                                             
                    </div>
                    <h1>
                    
                    </h1>
                </div>
            </div>
        )
    
    }
}

export default Header;