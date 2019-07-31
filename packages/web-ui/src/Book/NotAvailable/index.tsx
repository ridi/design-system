/** @jsx jsx */
import { jsx } from '@emotion/core';
import NotAvailableIcon from 'src/icons/NotAvailable.svg';
import { ThumbnailChildrenSize } from '../Thumbnail';
import * as styles from './styles';

export interface NotAvailableProps {
  size?: ThumbnailChildrenSize;
}

export const NotAvailable: React.FunctionComponent<NotAvailableProps> = (props) => (
  <p css={styles.notAvailable}>
    <NotAvailableIcon css={styles.icon(props.size)}/>
    <span css={styles.text}>이용불가</span>
  </p>
);
