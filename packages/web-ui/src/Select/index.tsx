import * as React from 'react';
import { Base, BaseProps } from '../Base';
import { Option } from './Option';
import { OptionGroup } from './OptionGroup';
import style from './style';

export interface SelectProps extends BaseProps {}

export class Select extends React.Component<SelectProps> {
  public static Option = Option;
  public static OptionGroup = OptionGroup;

  public static defaultProps = {
    render: 'select',
  };

  public render() {
    return (
      <Base css={style} {...this.props} />
    );
  }
}
