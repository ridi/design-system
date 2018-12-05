import * as icons from '@ridi/web-icons';
import * as React from 'react';
import { BaseProps } from '../BaseProps';

/**
 * @deprecated Use `@ridi/web-icons` directly instead.
 */
export interface IconProps extends BaseProps {
  /**
   * Icon name
   */
  name: keyof typeof icons;
}

/**
 * @deprecated Use `@ridi/web-icons` directly instead.
 */
export const Icon: React.FunctionComponent<IconProps> = ({
  name,
  render: Component,
  ...restProps
}) => (
  <Component src={icons[name]} alt={name} {...restProps} />
);

Icon.defaultProps = {
  render: 'img',
};
