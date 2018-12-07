import { css } from '@emotion/core';
import colors from '@ridi/colors';
import * as React from 'react';
import { Base, BaseProps } from '../Base';

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
  ...restProps
}) => (
  <Base css={style} {...restProps}>
    {prefix}Hello{postfix}
  </Base>
);

Hello.defaultProps = {
  postfix: '!',
  render: 'span',
};
