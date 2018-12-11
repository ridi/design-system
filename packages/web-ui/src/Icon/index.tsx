import * as icons from '@ridi/web-icons';
import * as React from 'react';
import { Base, BaseProps } from '../Base';

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
  ...restProps
}) => (
  <Base render={icons[name]} {...restProps} />
);
