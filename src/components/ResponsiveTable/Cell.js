import React, { PropTypes } from 'react';

function Cell({ header, children, ...props }) {
  return (
    <div className="Table-row-item" {...props}>
      {children}
    </div>
  );
}

Cell.propTypes = {
  title: PropTypes.string
}

export default Cell;
