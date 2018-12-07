/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import ArrowIcon from '../svgs/arrow_1_right.svg';
import * as styles from './styles';

export enum BookCountUnit {
  Single = '권',
  Serial = '화',
}

export interface BookCountProps {
  bookCount?: number;
  bookCountUnit?: BookCountUnit;
  bookCountWrapper?: {
    wrapper?: React.ReactType;
    getProps?: () => any;
  };
}

export const UnitBookCount: React.FunctionComponent<BookCountProps> = (props) => {
  const {
    bookCount,
    bookCountUnit,
    bookCountWrapper = {},
  } = props;
  const {
    wrapper = 'p',
    getProps = () => ({}),
  } = bookCountWrapper;
  const BookCountWrapper = wrapper;

  return Number(bookCount) > 0 ? (
    <BookCountWrapper
      css={styles.unitBookCount}
      {...getProps()}
    >
      <span css={styles.count}>
        총 {bookCount}{bookCountUnit}
        <ArrowIcon css={styles.icon}/>
      </span>
    </BookCountWrapper>
  ) : null;
};
