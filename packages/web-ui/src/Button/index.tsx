import * as React from 'react';
import { Base, BaseProps } from '../Base';
import style from './style';

export interface ButtonProps extends BaseProps {
  /**
   * Main color of `Button`.
   */
  color?: 'gray' | 'blue' | 'brown';

  /**
   * If `true`, `Button` will be rendered with colored border and white background.
   */
  outline?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  color,
  outline,
  ...restProps
}) => (
  <Base css={style({ color, outline })} {...restProps} />
);

Button.defaultProps = {
  color: 'gray',
  outline: false,
  render: 'button',
};
