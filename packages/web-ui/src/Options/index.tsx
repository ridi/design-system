import * as React from 'react';
import { Base, BaseProps } from '../Base';
import * as styles from './styles';

export interface OptionsProps extends BaseProps {
  /**
   * Type of separator that will be rendered between items.
   */
  separator?: 'dot' | 'pipe';

  children?: Array<React.ReactElement<Options.ItemProps>>;
}

export class Options extends React.Component<OptionsProps> {
  public static defaultProps = {
    render: 'ul',
    separator: 'pipe',
  };

  public render() {
    const {
      children,
      separator,
      ...restProps
    } = this.props;

    return (
      <Base css={styles.options({})} {...restProps}>
        {React.Children.map(children, (child) => (
          <Base render="li" css={styles.itemWrapper({ separator })}>
            {child}
          </Base>
        ))}
      </Base>
    );
  }
}

// tslint:disable-next-line:no-namespace
export namespace Options {
  export interface ItemProps extends BaseProps {
    active?: boolean;
  }

  export const Item: React.FunctionComponent<ItemProps> = ({
    active,
    ...restProps
  }) => (
    <Base css={styles.item({ active })} {...restProps} />
  );

  Item.defaultProps = {
    render: 'button',
  };
}
