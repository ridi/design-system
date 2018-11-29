import * as React from 'react';
import ArrowIcon from './svgs/arrow_1_right.svg';

export enum BOOK_COUNT_UNIT {
  Single = '권',
  Serial = '화',
}

export interface BookCountProps {
  bookCount?: number;
  bookCountUnit?: BOOK_COUNT_UNIT;
  bookCountWrapper?: {
    wrapper?: React.ReactType;
    getProps?: () => any;
  };
}

export const UnitBookCount: React.SFC<BookCountProps> = (props) => {
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
      className="UnitBookCount"
      {...getProps()}
    >
      <span className="UnitBookCount_Count">
        총 {bookCount}{bookCountUnit}
        <ArrowIcon className="UnitBookCount_Icon"/>
      </span>
    </BookCountWrapper>
  ) : null;
};
