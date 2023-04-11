import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
//import { View, Text, StyleSheet} from 'react-native';

class App extends Component {
  //constructor(props) {
  //  super(props);
  //  this.state = {
  //    current: new Date().toLocaleString()
  //  };
  //}
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>
          <h1>Sample App</h1>
          <p>これは0411にWeb版VisualStudioで修正したアプリです。</p>
      </div>
    );
  }
}

export default withAuthenticator(App);
