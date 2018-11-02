import * as React from 'react';

export interface HelloProps {
  prefix?: string;
  postfix?: string;

  [key: string]: any;
}

export const Hello: React.SFC<HelloProps> = ({
  prefix,
  postfix,
  ...restProps
}) => (
  <span {...restProps}>{prefix}Hello{postfix}</span>
);

Hello.defaultProps = {
  postfix: '!',
};
