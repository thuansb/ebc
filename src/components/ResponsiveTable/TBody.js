import React, { PropTypes } from 'react'

function TBody({ children, thArray, ...props}) {
  return <tbody {...props}>{
      React.Children.map(
        children,
        tr => React.cloneElement(tr, { thArray: thArray })
      )
    }</tbody>;
}

TBody.propTypes = {
  thArray: PropTypes.array,
}

export default TBody;
