import * as React from 'react';
import { Base, BaseProps } from '../Base';
import { Hello } from '../Hello';
import { World } from '../World';

export interface HelloWorldProps extends BaseProps {}

export const HelloWorld: React.FunctionComponent<HelloWorldProps> = (props) => (
  <Base {...props}>
    <Hello postfix=" " />
    <World />
  </Base>
);

HelloWorld.defaultProps = {
  render: 'span',
};
