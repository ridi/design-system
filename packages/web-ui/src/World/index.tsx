import * as React from 'react';

export interface WorldProps {
  prefix?: string;
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
