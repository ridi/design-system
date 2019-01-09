/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export const UnReadDot: React.FunctionComponent = () => (
  <p css={styles.unReadDot}>아직 읽지 않은 책</p>
);
