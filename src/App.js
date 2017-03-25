import React, { Component } from 'react';
import ResponsiveTable, { Row, HeaderRow, Cell } from './components/ResponsiveTable';
import demoData, { generate } from './data';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const testData = generate(50000);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Responsive Table</h2>
        </div>
        <div>
          <h2>Demo #2</h2>
          <ResponsiveTable>
            <HeaderRow>
              <Cell>ID</Cell>
              <Cell>Date</Cell>
              <Cell>Time</Cell>
              <Cell>Service</Cell>
              <Cell>Price</Cell>
              <Cell>Status</Cell>
              <Cell>Actions</Cell>
            </HeaderRow>
            {testData.map(rowData => (
              <Row key={rowData.id}>
                <Cell>{rowData.id}</Cell>
                <Cell>{rowData.date}</Cell>
                <Cell>{rowData.time}</Cell>
                <Cell>{rowData.service}</Cell>
                <Cell>{rowData.price}</Cell>
                <Cell>{rowData.status}</Cell>
                <Cell>
                  <button>View</button>
                  <button>Feedback</button>
                </Cell>
              </Row>
            ))}
          </ResponsiveTable>
        </div>
      </div>
    );
  }
}

export default App;
