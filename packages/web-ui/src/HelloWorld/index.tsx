import * as React from 'react';
import { BaseProps } from '../BaseProps';
import { Hello } from '../Hello';
import { World } from '../World';

export interface HelloWorldProps extends BaseProps {}

export const HelloWorld: React.FunctionComponent<HelloWorldProps> = ({
  render: Component,
  ...restProps
}) => (
  <Component {...restProps}>
    <Hello postfix=" " />
    <World />
  </Component>
);

HelloWorld.defaultProps = {
  render: 'span',
};
