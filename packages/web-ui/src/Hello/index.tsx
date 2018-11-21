import * as colors from '@ridi/colors/colors.json';
import { css, cx } from 'emotion';
import * as React from 'react';

export interface HelloProps {
  /**
   * A CSS class to be appended to default `Hello`'s class
   */
  className?: string;

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

const helloClassName = css`
  color: ${colors.dodgerblue[5].hex};
`;

export const Hello: React.SFC<HelloProps> = ({
  className,
  prefix,
  postfix,
  ...restProps
}) => (
  <span
    className={cx(helloClassName, className)}
    {...restProps}
  >
    {prefix}Hello{postfix}
  </span>
);

Hello.defaultProps = {
  postfix: '!',
};
