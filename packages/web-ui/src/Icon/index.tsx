import * as icons from '@ridi/web-icons';
import * as React from 'react';

/**
 * @deprecated Use `@ridi/web-icons` directly instead.
 */
export interface IconProps {
  /**
   * Icon name
   */
  name: keyof typeof icons;

  [key: string]: any;
}

/**
 * @deprecated Use `@ridi/web-icons` directly instead.
 */
export const Icon: React.SFC<IconProps> = ({
  name,
  ...restProps
}) => {
  const Component = icons[name];

  return <Component {...restProps} />;
};
