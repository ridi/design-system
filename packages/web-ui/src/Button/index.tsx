import * as React from 'react';
import { Base, BaseProps } from '../Base';
import style from './style';

export interface ButtonProps extends BaseProps {}

export const Button: React.FunctionComponent<ButtonProps> = (props) => (
  <Base css={style} {...props} />
);

Button.defaultProps = {
  render: 'button',
};
