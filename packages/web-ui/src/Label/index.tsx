import * as React from 'react';
import { Base, BaseProps } from '../Base';
import style from './style';

export interface LabelProps extends BaseProps {}

export const Label: React.FunctionComponent<LabelProps> = (props) => (
  <Base css={style} {...props} />
);

Label.defaultProps = {
  render: 'label',
};
