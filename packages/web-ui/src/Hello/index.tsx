import * as React from 'react';

export interface HelloProps {
  /**
   * A `string` to be attached before **"Hello"**
   */
  prefix?: string;

  /**
   * A `string` to be attached after **"Hello"**
   */
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