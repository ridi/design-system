import { css } from '@emotion/core';
import colors from '@ridi/colors';
import * as React from 'react';
import { Base, BaseProps } from '../Base';

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
  ...restProps
}) => (
  <Base css={style} {...restProps}>
    {prefix}World{postfix}
  </Base>
);

World.defaultProps = {
  postfix: '!',
  render: 'span',
};
