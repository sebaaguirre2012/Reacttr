import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main';

export default class App extends Component {
    state = {
        user : {
            photoURL : 'https://thumbs.dreamstime.com/z/moda-masculina-del-estilo-del-inconformista-del-hombre-de-avatar-del-icono-del-perfil-62449823.jpg',
            email : 'sebaaguirre2012@gmail.com',
            displayName : 'Seba Aguirre'
        }
    }
    
    render() {
        return (
            <div>
                <Header/>
                <Main user={this.state.user}/>
            </div>
        )
    }
}