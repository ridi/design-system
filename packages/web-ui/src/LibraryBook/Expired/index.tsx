/** @jsx jsx */
import { jsx } from '@emotion/core';
import { timer as TimerIcon } from '@ridi/web-icons';
import * as React from 'react';
import * as styles from './styles';

export const Expired: React.FunctionComponent = () => (
  <p css={styles.expired}>
    <TimerIcon css={styles.expiredIcon}/>
    기간 만료
  </p>
);
