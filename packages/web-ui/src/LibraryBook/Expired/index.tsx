/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import TimerIcon from '../svgs/timer.svg';
import * as styles from './styles';

export const Expired: React.FunctionComponent = () => (
  <p css={styles.expired}>
    <TimerIcon css={styles.expiredIcon}/>
    기간 만료
  </p>
);
