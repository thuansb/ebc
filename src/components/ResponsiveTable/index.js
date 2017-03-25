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
  hasNextPage, isNextPageLoading, list, loadNextPage,
  ...props
}) {

  // Get headers array if exist
  const headerRow = children.find(component => component.type === HeaderRow);
  const headers = (headerRow && React.Children.map(headerRow.props.children, (cell) => cell.props.children)) || [];
  // Prepare data
  const rows = children[1];

  // // If there are more items to be loaded then add an extra row to hold a loading indicator.
  // const rowCount = hasNextPage
  // ? list.size + 1
  // : list.size
  //
  // // Only load 1 page of items at a time.
  // // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  // const loadMoreRows = isNextPageLoading
  // ? () => {}
  // : loadNextPage
  //
  // // Every row is loaded except for our loading indicator row.
  // const isRowLoaded = ({ index }) => !hasNextPage || index < list.size


  const rowRenderer = ({
    key,
    index,
    isScrolling,
    isVisible,
    style
  }) => {
    if (rows[index].type === Row) {
      return React.cloneElement(rows[index], { headers, key, style });
    } else {
      return React.cloneElement(rows[index], { key, style });
    }
  }


  return (
    <div className="Table">
      {headerRow}
      <AutoSizer disableHeight>
        {
          ({ width }) => (
            <List
              rowCount={rows.length}
              rowHeight={width < breakPoint ? (rowHeight - 10) * headers.length : rowHeight}
              rowRenderer={rowRenderer}
              height={tableHeight}
              width={width}
              {...props}
              />
          )
        }
      </AutoSizer>
    </div>
  )
}

ResponsiveTable.propTypes = {
  children: PropTypes.array.isRequired,
  rowHeight: PropTypes.number.isRequired,
  tableHeight: PropTypes.number.isRequired,
  breakPoint: PropTypes.number.isRequired,
}

ResponsiveTable.defaultProps = {
  rowHeight: 50,
  tableHeight: 680,
  breakPoint: 760,
}

export default ResponsiveTable;

export { HeaderRow, Row, Cell };
