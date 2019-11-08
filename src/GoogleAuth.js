import React from 'react';
import { connect } from 'react-redux';
import { signIn,signOut } from './actions';
import Warning from './Pages/Warning/Warning';
import history from './history';

class GoogleAuth extends React.Component{

    componentDidMount(){        
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '828079410187-hv03dgq07dtd46obs1g6hv3595ci5him.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            }).catch((error) => {return <Warning/>});
        });        
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
            this.props.getUser(this.auth.currentUser);
            history.push('/api/initialize/'+this.auth.currentUser.get().getId());
        }
        else {
            this.props.signOut();
            this.props.getUser();
            history.push('/');
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton () {
        if (this.props.isSignedIn === null)
            return null;
        else if (this.props.isSignedIn)
            return (
                <button onClick = {this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                        Sign Out
                </button>
            );
            
        else    
            return (
                <button onClick = {this.onSignInClick} className="ui red google button">
                    <i className="google icon"/>
                        Sign In with Google
                </button>
            );
    }

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect( mapStateToProps, { signIn,signOut })(GoogleAuth);