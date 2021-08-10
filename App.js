import React, { Component } from 'react';
import { View  } from "react-native";
import firebase from 'firebase';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';



class App extends Component {
  
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCiUuOZKogKOP_itkH31QR9i4Nz8pQ6Js8",
        authDomain: "studentregistery-8fa42.firebaseapp.com",
        projectId: "studentregistery-8fa42",
        storageBucket: "studentregistery-8fa42.appspot.com",
        messagingSenderId: "903000160072",
        appId: "1:903000160072:web:743c31a20b3cb16ded657d",
        measurementId: "G-R11N7WX8PZ"
      });
   }else {
      firebase.app(); // if already initialized, use that one
   }

    
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
  
         <Router />
          
    
      </Provider>

    )
  }

}

export default App;
