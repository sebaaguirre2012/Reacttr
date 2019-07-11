import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'normalize-css';

class Index extends Component{
    render(){
        return <App/>
    }
}

ReactDOM.render(<Index/>, document.querySelector('#root'));