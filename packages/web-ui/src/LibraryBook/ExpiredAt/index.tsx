/** @jsx jsx */
import { jsx } from '@emotion/core';
import TimerIcon from '@ridi/web-icons/svgs/timer.svg';
import * as React from 'react';
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
