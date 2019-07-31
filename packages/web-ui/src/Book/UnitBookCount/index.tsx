/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import ArrowIcon from 'src/icons/ArrowTriangleRight.svg';
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
        총 <span css={styles.num}>{bookCount}</span>{bookCountUnit}
        <ArrowIcon css={styles.icon}/>
      </span>
    </BookCountWRapper>
  ) : null;
};
