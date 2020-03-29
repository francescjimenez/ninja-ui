import React from 'react';
import A from '../a/a';

export default ({ to, children, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to);
  // TODO: change links semantics
  return internal ? (
    <A to={to} {...rest}>
      {children}
    </A>
  ) : (
    <A to={to} {...rest}>
      {children}
    </A>
  );
};