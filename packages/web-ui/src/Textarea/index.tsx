import * as React from 'react';
import { Base, BaseProps } from '../Base';
import style from './style';

export interface TextareaProps extends BaseProps {}

export const Textarea: React.FunctionComponent<TextareaProps> = (props) => (
  <Base css={style} {...props} />
);

Textarea.defaultProps = {
  render: 'textarea',
};
