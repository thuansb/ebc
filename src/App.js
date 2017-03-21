import React, { Component } from 'react';
import ResponsiveTable, { THead, TBody, Tr, Td, Th } from './components/ResponsiveTable';
import demoData from './data';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Responsive Table</h2>
        </div>
        <div>
          <h2>Demo #1</h2>
          <ResponsiveTable>
            <THead>
              <Tr>
                <Th style={{width: '10%'}}>ID</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Service</Th>
                <Th>Price</Th>
                <Th>Status</Th>
                <Th>Action(s)</Th>
              </Tr>
            </THead>
            <TBody>
              {
                demoData.map(record => (
                  <Tr key={record.id}>
                    <Td>{record.id}</Td>
                    <Td>{record.date}</Td>
                    <Td>{record.time}</Td>
                    <Td>{record.service}</Td>
                    <Td>{record.price}</Td>
                    <Td>{record.status}</Td>
                    <Td>
                      <button>View</button> <button>Feedback</button>
                    </Td>
                  </Tr>
                ))
              }
            </TBody>
          </ResponsiveTable>



          { /* -------------------- DEMO 2: more than 12 cols ----------------- */}



          <h2>Demo #2</h2>
          <div className="App-demo-2">
            <ResponsiveTable>
              <THead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th>Service</Th>
                  <Th>Price</Th>
                  <Th>Status</Th>
                  <Th>status</Th>
                  <Th>status</Th>
                  <Th>status</Th>
                  <Th>status</Th>
                  <Th>status</Th>
                  <Th>status</Th>
                  <Th>status</Th>
                  <Th>status</Th>
                  <Th>status</Th>
                  <Th>Action(s)</Th>
                </Tr>
              </THead>
              <TBody>
                {
                  demoData.map(record => (
                    <Tr key={record.id}>
                      <Td>{record.id}</Td>
                      <Td>{record.date}</Td>
                      <Td>{record.time}</Td>
                      <Td>{record.service}</Td>
                      <Td>{record.price}</Td>
                      <Td>{record.status}</Td>
                      <Td>{record.status}</Td>
                      <Td>{record.status}</Td>
                      <Td>{record.status}</Td>
                      <Td>{record.status}</Td>
                      <Td>{record.status}</Td>
                      <Td>{record.status}</Td>
                      <Td>{record.status}</Td>
                      <Td>{record.status}</Td>
                      <Td>{record.status}</Td>
                      <Td>
                        <button>View</button> <button>Feedback</button>
                      </Td>
                    </Tr>
                  ))
                }
              </TBody>
            </ResponsiveTable>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
