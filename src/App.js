import React, { Component } from 'react';
import ResponsiveTable, { Row, HeaderRow, Cell } from './components/ResponsiveTable';
import { generate } from './data';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      isNextPageLoading: false,
      loadedRows: generate(10),
    }

    this.noPages = 10;

    this.loadNextPage = this.loadNextPage.bind(this);
  }

  loadNextPage({ startIndex, stopIndex }) {
    console.log(startIndex);
    console.log(stopIndex);
    console.log('loading');

    return new Promise((resolve, reject) => {
      // start loading
      this.setState({ isNextPageLoading: true });

      this.timeoutID = setTimeout(() => {
        // load more 10 records each time
        const loadedRows = this.state.loadedRows.concat(generate(10))
        this.setState({
          loadedRows,
          isNextPageLoading: false,
          pageIndex: this.state.pageIndex + 1,
        }, resolve);
      }, 1000 + Math.round(Math.random(2000)));
    })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Responsive Table</h2>
        </div>
        <div>
          <h2>Demo #2</h2>
          <ResponsiveTable
            loadNextPage={this.loadNextPage}
            hasNextPage={this.state.pageIndex < this.noPages}
            isNextPageLoading={this.state.isNextPageLoading}
            >
            <HeaderRow>
              <Cell>ID</Cell>
              <Cell>Date</Cell>
              <Cell>Time</Cell>
              <Cell>Service</Cell>
              <Cell>Price</Cell>
              <Cell>Status</Cell>
              <Cell>Actions</Cell>
            </HeaderRow>
            {this.state.loadedRows.map(rowData => (
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
