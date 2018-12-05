/** @jsx jsx */
// noinspection ES6UnusedImports
import { css, jsx } from '@emotion/core';
import colors from '@ridi/colors';
import * as React from 'react';
import { BaseProps } from '../BaseProps';

export interface HelloProps extends BaseProps {
  /**
   * A `string` to be attached before **"Hello"**
   */
  prefix?: string;

  /**
   * A `string` to be attached after **"Hello"**
   */
  postfix?: string;
}

const style = css`
  color: ${colors.dodgerblue_50};
`;

export const Hello: React.FunctionComponent<HelloProps> = ({
  prefix,
  postfix,
  render: Component,
  ...restProps
}) => (
  <Component
    css={style}
    {...restProps}
  >
    {prefix}Hello{postfix}
  </Component>
);

Hello.defaultProps = {
  postfix: '!',
  render: 'span',
};
