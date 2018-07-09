import React, { Component } from 'react';
import './App.scss';
import Main from "./js/Main";
import Inner from "./js/Inner";
import List from "./js/List";
import Footer from "./js/Footer";

class App extends Component {
  render() {
    return (
        <div className={'App'}>
            <Main/>
            <Inner/>
            <List/>
        </div>
    );
  }
}

export default App;
