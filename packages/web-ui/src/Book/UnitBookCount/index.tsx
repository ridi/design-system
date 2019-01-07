/** @jsx jsx */
import { jsx } from '@emotion/core';
import { arrow_1_right as ArrowIcon } from '@ridi/web-icons';
import * as React from 'react';
import * as styles from './styles';

export enum BookCountUnit {
  Single = '권',
  Serial = '화',
}

export interface UnitBookCountProps {
  bookCount?: number;
  bookCountUnit?: BookCountUnit;
  render?: any;
  [key: string]: any;
}

export const UnitBookCount: React.FunctionComponent<UnitBookCountProps> = (props) => {
  const {
    bookCount,
    bookCountUnit,
    render: BookCountWRapper = 'p',
    ...restProps
  } = props;

  return Number(bookCount) > 0 ? (
    <BookCountWRapper
      css={styles.unitBookCount}
      {...restProps}
    >
      <span css={styles.count}>
        총 {bookCount}{bookCountUnit}
        <ArrowIcon css={styles.icon}/>
      </span>
    </BookCountWRapper>
  ) : null;
};
