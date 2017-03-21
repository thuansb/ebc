import React, { PropTypes } from 'react'

function Tr({ children, thArray, ...props}) {
  return (
    <tr {...props}>
      {
        React.Children.map(
          children,
          (e, idx) => React.cloneElement(e, { title: thArray && thArray[idx] })
        )
      }
    </tr>
  );
}

Tr.propTypes = {
  thArray: PropTypes.array,
}

export default Tr;
