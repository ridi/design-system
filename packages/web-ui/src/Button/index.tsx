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

export class Button extends React.Component<ButtonProps> {
  public static defaultProps = {
    color: 'gray',
    outline: false,
    size: 'medium',
    spinner: false,
    thickBorder: false,
    render: 'button',
  };

  private handleClick = (event: React.MouseEvent) => {
    const { disabled, onClick } = this.props;

    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  public render = () => {
    const {
      color,
      disabled,
      outline,
      size,
      spinner,
      tabIndex,
      thickBorder,
      onClick,
      ...restProps
    } = this.props;

    return (
      <Base
        css={style({ color, outline, size, spinner, thickBorder })}
        disabled={disabled}
        tabIndex={disabled ? -1 : tabIndex}
        onClick={this.handleClick}
        {...restProps}
      />
    );
  };
}
