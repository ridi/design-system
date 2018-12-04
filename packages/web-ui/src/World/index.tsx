/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as colors from '@ridi/colors/colors.json';
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
  color: colors.orange[5].hex,
});

export const World: React.SFC<WorldProps> = ({
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
