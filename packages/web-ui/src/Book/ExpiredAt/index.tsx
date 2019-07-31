/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import TimerIcon from 'src/icons/Timer.svg';
import { ThumbnailChildrenSize } from '../Thumbnail';
import * as styles from './styles';

export interface ExpiredAtProps {
  expiredAt: string;
  size?: ThumbnailChildrenSize;
}

export const ExpiredAt: React.FunctionComponent<ExpiredAtProps> = (props) => {
  const { expiredAt, size } = props;
  const remainText = '남음';
  const remainTimeIndex = expiredAt.indexOf(remainText);
  const isRemainTime = remainTimeIndex !== -1;
  const remainTime = isRemainTime ? expiredAt.slice(0, remainTimeIndex) : '';
  return (
    <p css={styles.expiredAt(size, isRemainTime)}>
      {isRemainTime ? (
        <React.Fragment>
          <TimerIcon css={styles.expiredAtIcon(size)}/> 
          {remainTime}<span css={styles.remainText}>{remainText}</span>
        </React.Fragment>
      ) : expiredAt}
    </p>
  );
};
