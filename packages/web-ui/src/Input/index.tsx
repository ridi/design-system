import * as React from 'react';
import { Base, BaseProps } from '../Base';
import style from './style';

export interface InputProps extends BaseProps {}

export const Input: React.FunctionComponent<InputProps> = (props) => (
  <Base css={style} {...props} />
);

Input.defaultProps = {
  render: 'input',
};
