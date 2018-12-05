/** @jsx jsx */
// noinspection ES6UnusedImports
import { css, jsx } from '@emotion/core';
import colors from '@ridi/colors';
import * as React from 'react';
import { BaseProps } from '../BaseProps';

export interface WorldProps extends BaseProps {
  /**
   * A `string` to be attached before **"World"**
   */
  prefix?: string;

  /**
   * A `string` to be attached after **"World"**
   */
  postfix?: string;
}

const style = css({
  color: colors.orange_50,
});

export const World: React.FunctionComponent<WorldProps> = ({
  prefix,
  postfix,
  render: Component,
  ...restProps
}) => (
  <Component
    css={style}
    {...restProps}
  >
    {prefix}World{postfix}
  </Component>
);

World.defaultProps = {
  postfix: '!',
  render: 'span',
};
