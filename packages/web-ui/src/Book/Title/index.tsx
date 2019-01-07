/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export interface TitleProps {
  title: string;
}

export const Title: React.FunctionComponent<TitleProps> = (props) => (
  <p css={styles.title}>{props.title}</p>
);
