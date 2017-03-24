import React from 'react';

import Row from './Row';
import HeaderRow from './HeaderRow';
import Cell from './Cell';
import './styles.css';

function ResponsiveTable({ children, ...props }) {

  // Get headers array if exist
  const headerRow = children.find(component => component.type === HeaderRow);
  const headers = (headerRow && React.Children.map(headerRow.props.children, (cell) => cell.props.children)) || [];
  console.log(headers);
  return (
    <div className="Table" {...props}>
      {
        React.Children.map(
          children,
          e => e.type === Row ? React.cloneElement(e, { headers }) : e
        )
      }
    </div>
  )
}

export default ResponsiveTable;

export { HeaderRow, Row, Cell };
