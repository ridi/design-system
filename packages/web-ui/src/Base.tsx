/** @jsx jsx */
// noinspection ES6UnusedImports
import { jsx } from '@emotion/core';
import * as React from 'react';

export interface BaseProps {
  /**
   * *[Inherited]* A render function or any React type for rendering root component.
   */
  render?: React.ReactType;

  /**
   * For passing through props to root component.
   */
  [key: string]: any;
}

export const Base: React.FunctionComponent<BaseProps> = ({
  render: Component,
  ...restProps
}) => (
  <Component {...restProps} />
);

Base.defaultProps = {
  render: 'div',
};
