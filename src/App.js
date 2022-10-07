import { Fragment } from 'react';
import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {
  render() {
    let subscribers = [
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "8888888888"
      },
      {
        id: 2,
        name: "Srishti Gupta",
        phone: "9999999999"
      }
    ];
      return (
        <Fragment>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          {
            subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            })
          }
        </div>
        </Fragment>
     );
  }
}
export default App;


