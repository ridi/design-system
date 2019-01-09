/** @jsx jsx */
import { jsx } from '@emotion/core';
import { timer as TimerIcon } from '@ridi/web-icons';
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
