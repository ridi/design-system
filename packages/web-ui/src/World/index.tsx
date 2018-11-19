import { css, cx } from 'emotion';
import * as React from 'react';

export interface WorldProps {
  /**
   * A CSS class to be appended to default `World`'s class
   */
  className?: string;

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

const worldClassName = css({
  color: 'turquoise',
});

export const World: React.SFC<WorldProps> = ({
  className,
  prefix,
  postfix,
  ...restProps
}) => (
  <span
    className={cx(worldClassName, className)}
    {...restProps}
  >
    {prefix}World{postfix}
  </span>
);

World.defaultProps = {
  postfix: '!',
};
