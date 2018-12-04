/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import colors from '@ridi/colors';
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

const style = css`
  color: ${colors.dodgerblue_50};
`;

export const Hello: React.SFC<HelloProps> = ({
  prefix,
  postfix,
  ...restProps
}) => (
  <span
    css={style}
    {...restProps}
  >
    {prefix}Hello{postfix}
  </span>
);

Hello.defaultProps = {
  postfix: '!',
};
