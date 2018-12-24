import * as React from 'react';
import { Base, BaseProps } from '../Base';

export interface OptionProps extends BaseProps {}

export const Option: React.FunctionComponent<OptionProps> = (props) => (
  <Base {...props} />
);

Option.defaultProps = {
  render: 'option',
};
