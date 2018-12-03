import * as icons from '@ridi/web-icons';
import * as React from 'react';

export interface IconProps {
  /**
   * Icon name
   */
  name: keyof typeof icons;

  [key: string]: any;
}

export const Icon: React.SFC<IconProps> = ({
  name,
  ...restProps
}) => {
  const Component = icons[name];

  return <Component {...restProps} />;
};
