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
  bookCountWrapper?: {
    wrapper?: React.ReactType;
    getProps?: () => any;
  };
}

export const UnitBookCount: React.FunctionComponent<UnitBookCountProps> = (props) => {
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
