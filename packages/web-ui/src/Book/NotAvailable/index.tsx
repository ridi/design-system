/** @jsx jsx */
import { jsx } from '@emotion/core';
import { notAvailable1 as NotAvailableIcon } from '@ridi/web-icons';
import * as styles from './styles';

export const NotAvailable: React.FunctionComponent = () => (
  <p css={styles.notAvailable}>
    <NotAvailableIcon css={styles.icon}/>
    <span css={styles.text}>이용불가</span>
  </p>
);
