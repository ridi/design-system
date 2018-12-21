import * as React from 'react';
import { Base, BaseProps } from '../Base';

export interface OptionGroupProps extends BaseProps {}

export const OptionGroup: React.FunctionComponent<OptionGroupProps> = (props) => (
  <Base {...props} />
);

OptionGroup.defaultProps = {
  render: 'optgroup',
};
