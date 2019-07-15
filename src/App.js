import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';

import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';
import Login from './components/Login';

export default class App extends Component {
    state = {
        user : null
    }
    
    componentWillMount () {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
                this.setState({ user })
                console.log(user)
          } else {
                this.setState({ user: null })
          }
        })
      }

    handleOnAuth () {
        const provider = new firebase.auth.GithubAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesión`))
            .catch(error => console.error(`Error: ${error.code}: ${error.message}`))
    }

    handleLogout() {
        firebase.auth().signOut()
            .then(() => console.log('Te has desconenctado correctamente'))
            .catch(() => console.error('Ha ocurrido un error'))
    }

    render() {
        return (
            <BrowserRouter>
                <div className='container-fluid'>
                    <Header />

                    <Switch>
                        <Route path='/' exact render={() => {
                            if (this.state.user) {
                                return (
                                    <Main
                                        user={this.state.user}
                                        onLogout={this.handleLogout}
                                    />
                                )
                            } else {
                                return (
                                    <Login onAuth={this.handleOnAuth} />
                                )
                            }
                            }}/>
                        
                        <Route path='/profile' render={ () => ( 
                            <Profile 
                                picture={this.state.user.photoURL}
                                username={this.state.user.email.split('@')[0]}
                                displayName={this.state.user.displayName}
                                location={this.state.user.location}
                                emailAddress={this.state.user.email}
                            /> 
                        )}/>
                        
                        <Route path='/user/:username' render={({ params }) => (
                            <Profile 
                                displayName={params.username}
                                username={params.username}
                            /> 
                        )}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}