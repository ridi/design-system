import * as React from 'react';
import { Hello } from '../Hello';
import { World } from '../World';

export interface HelloWorldProps {
  [key: string]: any;
}

export const HelloWorld: React.FunctionComponent<HelloWorldProps> = ({
  ...restProps
}) => (
  <span {...restProps}>
    <Hello postfix=" " />
    <World />
  </span>
);
