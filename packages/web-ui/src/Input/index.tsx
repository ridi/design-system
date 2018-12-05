/** @jsx jsx */
// noinspection ES6UnusedImports
import { jsx } from '@emotion/core';
import * as React from 'react';
import { BaseProps } from '../BaseProps';
import style from './style';

export interface InputProps extends BaseProps {}

export const Input: React.FunctionComponent<InputProps> = ({
  render: Component,
  ...restProps
}) => (
  <Component
    css={style}
    {...restProps}
  />
);

Input.defaultProps = {
  render: 'input',
};
