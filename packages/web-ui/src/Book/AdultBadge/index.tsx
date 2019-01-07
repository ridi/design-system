/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import * as styles from './styles';

export const AdultBadge: React.FunctionComponent = () => (
  <p css={styles.adultBadge}>19세 미만 구독불가</p>
);
