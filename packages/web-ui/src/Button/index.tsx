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

  /**
   * The size of `Button`
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * If `true`, `Button` will be rendered with spinner icon inside instead of given children.
   */
  spinner?: boolean;

  /**
   * If `true`, `Button` will be rendered with thick border.
   */
  thickBorder?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  color,
  outline,
  size,
  spinner,
  thickBorder,
  ...restProps
}) => (
  <Base css={style({ color, outline, size, spinner, thickBorder })} {...restProps} />
);

Button.defaultProps = {
  color: 'gray',
  outline: false,
  size: 'medium',
  spinner: false,
  thickBorder: false,
  render: 'button',
};
