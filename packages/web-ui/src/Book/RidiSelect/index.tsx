/** @jsx jsx */
import { jsx } from '@emotion/core';
import RidiselectIcon from '@ridi/web-icons/svgs/RidiselectFilled.svg';
import * as React from 'react';
import { ThumbnailChildrenSize } from '../Thumbnail';
import * as styles from './styles';

export interface RidiselectProps {
  size?: ThumbnailChildrenSize;
}

export const Ridiselect: React.FunctionComponent<RidiselectProps> = (props) => (
  <p css={styles.ridiselect(props.size)}>
    <RidiselectIcon css={styles.ridiselectIcon(props.size)}/>
    리디셀렉트
  </p>
);
