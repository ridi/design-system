import * as React from 'react';
import { Base, BaseProps } from '../Base';
import style from './style';

export interface GroupProps extends BaseProps {
  /**
   * The orientation children will be stacked.
   */
  orientation?: 'vertical' | 'horizontal';
}

export const Group: React.FunctionComponent<GroupProps> = (props) => (
  <Base css={style(props)} {...props} />
);

Group.defaultProps = {
  render: 'div',
  orientation: 'horizontal',
};
