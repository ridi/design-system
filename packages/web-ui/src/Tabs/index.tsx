import * as React from 'react';
import { Base, BaseProps } from '../Base';
import * as styles from './styles';

export interface TabsProps extends BaseProps {
  /**
   * Bottom border color of active item.
   */
  activeColor?: 'black' | 'blue';

  /**
   * If `true`, stretch each item's width.
   */
  stretchItems?: boolean;

  children?: Array<React.ReactElement<Tabs.ItemProps>>;
}

export class Tabs extends React.Component<TabsProps> {
  public static defaultProps = {
    render: 'ul',
    activeColor: 'black',
  };

  public render() {
    const {
      activeColor,
      children,
      stretchItems,
      ...restProps
    } = this.props;

    return (
      <Base css={styles.tabs({ stretchItems })} {...restProps}>
        {React.Children.map(children, (child) => (
          <Base render="li" css={styles.itemWrapper({ stretchItems })}>
            {React.cloneElement(child, { activeColor, ...child.props })}
          </Base>
        ))}
      </Base>
    );
  }
}

// tslint:disable-next-line:no-namespace
export namespace Tabs {
  export interface ItemProps extends BaseProps {
    active?: boolean;
    activeColor?: TabsProps['activeColor'];
  }

  export const Item: React.FunctionComponent<ItemProps> = ({
    active,
    activeColor,
    ...restProps
  }) => (
    <Base css={styles.item({ active, activeColor })} {...restProps} />
  );

  Item.defaultProps = {
    render: 'button',
  };
}
