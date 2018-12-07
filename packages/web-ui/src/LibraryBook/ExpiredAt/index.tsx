/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import TimerIcon from '../svgs/timer.svg';
import * as styles from './styles';
export interface ExpiredAtProps {
  expiredAt: string;
}

export const ExpiredAt: React.FunctionComponent<ExpiredAtProps> = (props) => (
  <p css={styles.expiredAt}>
    <TimerIcon css={styles.expiredAtIcon}/>
    {props.expiredAt}
  </p>
);
