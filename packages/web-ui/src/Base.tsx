/** @jsx jsx */
// noinspection ES6UnusedImports
import { jsx } from '@emotion/core';
import * as React from 'react';

export interface BaseProps {
  css?: any; // To suppress type error.

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
  css,
  render: Component,
  ...restProps
}) => (
  <Component css={css} {...restProps} />
);

Base.defaultProps = {
  render: 'div',
};
