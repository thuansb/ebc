import React, { PropTypes } from 'react';
import List from 'react-virtualized/dist/commonjs/List';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader';
import Row from './Row';
import HeaderRow from './HeaderRow';
import Cell from './Cell';
import './styles.css';

function ResponsiveTable({
  children, rowHeight, tableHeight, breakPoint,
  hasNextPage, isNextPageLoading, loadNextPage,
  ...props
}) {

  // Get headers array if exist
  const headerRow = children.find(component => component.type === HeaderRow);
  const headers = (headerRow && React.Children.map(headerRow.props.children, (cell) => cell.props.children)) || [];

  // Prepare data
  const rows = children[1];

  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const rowCount = hasNextPage ? rows.length + 1 : rows.length;

  // Only load 1 page of items at a time.
  const loadMoreRows = isNextPageLoading ? () => {} : loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isRowLoaded = ({ index }) => !hasNextPage || index + 1 < rows.length;

  const rowRenderer = ({
    key,
    index,
    isScrolling,
    isVisible,
    style
  }) => {
    if (!isRowLoaded({ index })) {
      return (<div key={key} style={style} className="Table-row Table-loading-indicator">Loading...</div>);
    } else {
      if (rows[index].type === Row) {
        return React.cloneElement(rows[index], { headers, key, style });
      }
    }
  }


  return (
    <div className="Table">
      {headerRow}
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={rowCount}
        >
        {
          ({ onRowsRendered, registerChild }) => (
            <AutoSizer disableHeight>
              {
                ({ width }) => (
                  <List
                    ref={registerChild}
                    onRowsRendered={onRowsRendered}
                    rowCount={rows.length}
                    rowHeight={width < breakPoint ? (rowHeight - 20) * headers.length : rowHeight}
                    rowRenderer={rowRenderer}
                    height={tableHeight}
                    width={width}
                    {...props}
                    />
                )
              }
            </AutoSizer>
          )
        }
      </InfiniteLoader>
    </div>
  )
}

ResponsiveTable.propTypes = {
  children: PropTypes.array.isRequired,
  rowHeight: PropTypes.number.isRequired,
  tableHeight: PropTypes.number.isRequired,
  breakPoint: PropTypes.number.isRequired,
  threshold: PropTypes.number,
}

ResponsiveTable.defaultProps = {
  rowHeight: 65,
  tableHeight: 550,
  breakPoint: 760,
  threshold: 15,
}

export default ResponsiveTable;

export { HeaderRow, Row, Cell };
