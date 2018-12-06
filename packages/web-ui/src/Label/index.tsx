import * as React from 'react';
import { Base, BaseProps } from '../Base';
import style from './style';

export interface LabelProps extends BaseProps {
  /**
   * For active style.
   */
  active?: boolean;

  /**
   * For disabled style.
   */
  disabled?: boolean;
}

export const Label: React.FunctionComponent<LabelProps> = ({
  active,
  disabled,
  ...restProps
}) => (
  <Base css={style({ active, disabled })} {...restProps} />
);

Label.defaultProps = {
  active: false,
  disabled: false,
  render: 'label',
};
