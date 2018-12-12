/** @jsx jsx */
import { jsx } from '@emotion/core';
import RidiselectIcon from '@ridi/web-icons/svgs/logo_ridiselect_2.svg';
import * as React from 'react';
import * as styles from './styles';

export const Ridiselect: React.FunctionComponent = () => (
  <p css={styles.ridiselect}>
    <RidiselectIcon css={styles.ridiselectIcon}/>
    리디셀렉트
  </p>
);
