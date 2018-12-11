import * as React from 'react';
import { Base, BaseProps } from '../Base';
import { Option } from './Option';
import { OptionGroup } from './OptionGroup';
import style from './style';

export interface SelectProps extends BaseProps {
  /**
   * Specify whether to render outline.
   */
  outline?: boolean;
}

export class Select extends React.Component<SelectProps> {
  public static Option = Option;
  public static OptionGroup = OptionGroup;

  public static defaultProps = {
    outline: false,
    render: 'select',
  };

  public render() {
    const {
      outline,
      ...restProps
    } = this.props;

    return (
      <Base css={style({ outline })} {...restProps} />
    );
  }
}
