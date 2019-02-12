import * as React from 'react';
import { Base, BaseProps } from '../Base';
import * as styles from './styles';

export interface GroupProps extends BaseProps {
  /**
   * The orientation children will be stacked.
   */
  orientation?: 'vertical' | 'horizontal';
}

export const Group: React.FunctionComponent<GroupProps> = ({
  children,
  orientation,
  ...restProps
}) => (
  <Base css={styles.group({ orientation })} {...restProps}>
    {React.Children.map(children, (child) => (
      <Base render="li" css={styles.itemWrapper({ orientation })}>
        {child}
      </Base>
    ))}
  </Base>
);

Group.defaultProps = {
  render: 'ul',
  orientation: 'horizontal',
};
