/** @jsx jsx */
// noinspection ES6UnusedImports
import { css, jsx } from '@emotion/core';
import colors from '@ridi/colors';
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

const style = css({
  color: colors.orange_50,
});

export const World: React.FunctionComponent<WorldProps> = ({
  prefix,
  postfix,
  ...restProps
}) => (
  <span
    css={style}
    {...restProps}
  >
    {prefix}World{postfix}
  </span>
);

World.defaultProps = {
  postfix: '!',
};
