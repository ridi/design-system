import * as svgs from '@ridi/web-icons';
import * as React from 'react';

export interface IconProps {
  /**
   * Icon name
   */
  name: string;

  [key: string]: any;
}

export const Icon: React.SFC<IconProps> = ({
  name,
  ...restProps
}) => {
  const Component = svgs[name];

  return <Component {...restProps} />;
};
