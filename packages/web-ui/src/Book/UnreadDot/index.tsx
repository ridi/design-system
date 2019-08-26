/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export const UnreadDot: React.FunctionComponent = () => (
  <p css={styles.unreadDot}>아직 읽지 않은 책</p>
);
