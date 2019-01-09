/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export interface AuthorProps {
  author: string;
}

export const Author: React.FunctionComponent<AuthorProps> = (props) => (
  <p css={styles.author}>{props.author}</p>
);
