import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDqwooAIWAxb3uR6luffD0zcadENS0XHeg",
  authDomain: "uso-do-api.firebaseapp.com",
  databaseURL: "https://uso-do-api.firebaseio.com",
  projectId: "uso-do-api-youtube",
  storageBucket: "uso-do-api-youtube.appspot.com",
  messagingSenderId: "835073765304",
  appId: "1:835073765304:web:44eca898930d1c9412294d",
  measurementId: "G-RWDN4E6Y57"
};

Firebase.initializeApp(config);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
