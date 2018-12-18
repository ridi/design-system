import * as React from 'react';
import { Base, BaseProps } from '../Base';
import style from './style';

export interface ButtonProps extends BaseProps {
  color?: 'gray' | 'blue' | 'brown';
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  color,
  ...restProps
}) => (
  <Base css={style({ color })} {...restProps} />
);

Button.defaultProps = {
  color: 'gray',
  render: 'button',
};
