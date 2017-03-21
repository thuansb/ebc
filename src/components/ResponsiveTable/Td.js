import React, { PropTypes } from 'react';

function Td({ title, children, ...props }) {
  return (
    <td {...props}>
      {title ? (<span><span className="col-title">{title}</span> {children}</span>) : children}
    </td>
  );
}

Td.propTypes = {
  title: PropTypes.string
}

export default Td;
