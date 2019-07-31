/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import UpIcon from 'src/icons/Up.svg';
import { displayHidden } from 'src/styles';
import * as styles from './styles';

export const UpdateBadge: React.FunctionComponent = () => (
  <p css={styles.updateBadge}><UpIcon css={styles.updateIcon}/><span css={displayHidden}>신규 업데이트 도서</span></p>
);
