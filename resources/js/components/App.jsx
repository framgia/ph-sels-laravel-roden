import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Router from './Router.js';
import NavHeader from './common/NavHeader';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <NavHeader />
            <Router />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;