import React from 'react';
import THead from './THead';
import TBody from './TBody';
import Tr from './Tr';
import Td from './Td';
import Th from './Th';
import './styles.css';

function ResponsiveTable({ children, ...props }) {

  // Get Th array if exist
  const thead = children.find(component => component.type === THead);
  const tr = thead && React.Children.only(thead.props.children);
  const thArray = (tr && React.Children.map(tr.props.children, (th) => th.props.children)) || [];

  return (
    <table {...props}>
      {
        React.Children.map(
          children,
          e => e.type === TBody ? React.cloneElement(e, { thArray }) : e
        )
      }
    </table>
  )
}

export default ResponsiveTable;

export { THead, TBody, Tr, Th, Td };
