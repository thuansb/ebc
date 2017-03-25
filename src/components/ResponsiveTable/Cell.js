import React, { PropTypes } from 'react';

function Cell({ header, children, flex = 1, ...props }) {
  return (
    <div className="Table-row-item" {...props} style={{ flex: flex }}>
      {children}
    </div>
  );
}

Cell.propTypes = {
  title: PropTypes.string
}

export default Cell;
