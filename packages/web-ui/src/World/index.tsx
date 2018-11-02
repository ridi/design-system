import * as React from 'react';

export interface WorldProps {
  /**
   * A `string` to be attached before **"World"**
   */
  prefix?: string;

  /**
   * A `string` to be attached after **"World"**
   */
  postfix?: string;

  [key: string]: any;
}

export const World: React.SFC<WorldProps> = ({
  prefix,
  postfix,
  ...restProps
}) => (
  <span {...restProps}>{prefix}World{postfix}</span>
);

World.defaultProps = {
  postfix: '!',
};
