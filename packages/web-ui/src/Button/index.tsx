import * as React from 'react';
import { Base, BaseProps } from '../Base';
import style from './style';

export interface ButtonProps extends BaseProps {
  /**
   * Main color of `Button`.
   */
  color?: 'gray' | 'blue' | 'brown';

  /**
   * Disabled state.
   *
   * If `true`, `tabIndex` is set to `-1` and `event.preventDefault()` is called inside `onClick` event handler
   * to explicitly disable `Button`'s functionality.
   */
  disabled?: boolean;

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

const handleDisabledClick = (event: React.MouseEvent) => {
  event.preventDefault();
};

export const Button: React.FunctionComponent<ButtonProps> = ({
  color,
  disabled,
  outline,
  size,
  spinner,
  tabIndex,
  thickBorder,
  onClick,
  ...restProps
}) => (
  <Base
    css={style({ color, outline, size, spinner, thickBorder })}
    disabled={disabled}
    tabIndex={disabled ? -1 : tabIndex}
    onClick={disabled ? handleDisabledClick : onClick}
    {...restProps}
  />
);

Button.defaultProps = {
  render: 'button',
  color: 'gray',
  size: 'medium',
};
