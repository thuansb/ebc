import React, { PropTypes } from 'react';
import List from 'react-virtualized/dist/commonjs/List';

function TBody({ children, thArray, ...props}) {

  const rowRenderer = ({
    key,
    index,
    isScrolling,
    isVisible,
    style
  }) => React.cloneElement(children[index], { thArray, key, style });

  return (
    <tbody {...props}>
      <List
        ref='List'
        height={1000}
        rowCount={children.length}
        rowHeight={50}
        rowRenderer={rowRenderer}
        width={1000}
        />
    </tbody>
  );
}

TBody.propTypes = {
  thArray: PropTypes.array,
}

export default TBody;
