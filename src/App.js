import { Fragment } from 'react';
import React, { Component } from 'react';
import Header from './Header.js';

class App extends Component {
  render() {
      return (
        <Fragment>
           <Header/>
           <button>Add</button>
           <div>
              <span>Name</span>
              <span>Phone</span>
           </div>
        </Fragment>
     );
  }
}
export default App;


