import React, { PropTypes } from 'react'

function Row({ children, headers, ...props}) {
  return (
    <div className="Table-row" {...props}>
      {
        React.Children.map(
          children,
          (e, idx) => React.cloneElement(e, { "data-header": headers && headers[idx] })
        )
      }
    </div>
  );
}

Row.propTypes = {
  titles: PropTypes.array,
}

export default Row;
