import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import 'normalize-css';
import App from './App';

const firebaseConfig = {
    apiKey: "AIzaSyATM2zGkouyFvapAPsXKONrnbKrrZFExUE",
    authDomain: "sebastian-reacttr.firebaseapp.com",
    databaseURL: "https://sebastian-reacttr.firebaseio.com",
    projectId: "sebastian-reacttr",
    storageBucket: "",
    messagingSenderId: "1054263410598",
    appId: "1:1054263410598:web:e7b5c39d7a04771b"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App/>, document.querySelector('#root'));