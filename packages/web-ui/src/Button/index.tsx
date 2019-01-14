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
   * If `true`, `tabIndex` is set to `-1` and `event.preventDefault()` is called inside `onClick`, `onContextMenu` event handler
   * to explicitly disable `Button`'s functionality.
   */
  disabled?: boolean;

  /**
   * If `true`, `Button` will be rendered with loading icon inside.
   */
  loading?: boolean;

  /**
   * If `true`, `Button` will be rendered with colored border and white background.
   */
  outline?: boolean;

  /**
   * The size of `Button`
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * If `true`, `Button` will be rendered with thick border.
   */
  thickBorder?: boolean;
}

const cancelEvent = (event: React.MouseEvent) => {
  event.preventDefault();
};

export const Button: React.FunctionComponent<ButtonProps> = ({
  color,
  disabled,
  loading,
  outline,
  size,
  tabIndex,
  thickBorder,
  onClick,
  onContextMenu,
  ...restProps
}) => (
  <Base
    css={style({ color, outline, size, loading, thickBorder })}
    disabled={disabled}
    tabIndex={disabled ? -1 : tabIndex}
    onClick={disabled ? cancelEvent : onClick}
    onContextMenu={disabled ? cancelEvent : onContextMenu}
    {...restProps}
  />
);

Button.defaultProps = {
  render: 'button',
  color: 'gray',
  size: 'medium',
};
