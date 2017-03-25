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
      loadedRows: generate(1),
    }

    this.noPages = 1;

    this.loadNextPage = this.loadNextPage.bind(this);
  }

  // API call simulate
  loadNextPage({ startIndex, stopIndex }) {
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
      }, 500 + Math.round(Math.random(500)));
    })

  }

  render() {
    return (
      <div className="App">
        <h2>Responsive Table Demo #1</h2>
        <ResponsiveTable
          loadNextPage={this.loadNextPage}
          hasNextPage={this.state.pageIndex < this.noPages}
          isNextPageLoading={this.state.isNextPageLoading}
          threshold={25} //Threshold at which to pre-fetch data
          >
          <HeaderRow>
            <Cell>ID</Cell>
            <Cell>Date</Cell>
            <Cell>Time</Cell>
            <Cell flex={2}>Service</Cell>
            <Cell>Price</Cell>
            <Cell>Status</Cell>
            <Cell>Actions</Cell>
          </HeaderRow>
          {this.state.loadedRows.map(rowData => (
            <Row key={rowData.id}>
              <Cell>{rowData.id}</Cell>
              <Cell>{rowData.date}</Cell>
              <Cell>{rowData.time}</Cell>
              <Cell flex={2}>{rowData.service}</Cell>
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
    );
  }
}

export default App;
