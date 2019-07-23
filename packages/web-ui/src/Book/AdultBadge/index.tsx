/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { displayHidden } from 'src/styles';
import AdultBadgeIcon from 'src/svgs/AdultBadge.svg';
import * as styles from './styles';

export const AdultBadge: React.FunctionComponent = () => (
  <p css={styles.adultBadgeWrapper}>
    <AdultBadgeIcon css={styles.adultBadge} />
    <span css={displayHidden}>19세 미만 구독불가</span>
  </p>
);
