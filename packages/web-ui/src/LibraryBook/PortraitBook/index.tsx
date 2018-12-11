/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import * as React from 'react';
import * as LibraryBook from '../';
import * as styles from './styles';

export interface PortraitBookProps extends
  LibraryBook.AuthorProps,
  LibraryBook.ThumbnailProps,
  LibraryBook.TitleProps {
    className?: string;
    [extraKey: string]: any;
  }

export const PortraitBook: React.FunctionComponent<PortraitBookProps> = (props) => {
  const {
    adultBadge,
    author,
    bookCount,
    bookCountUnit,
    bookCountWrapper,
    className,
    downloadProgress,
    downloadStatus,
    expired = false,
    expiredAt,
    notAvailable = false,
    onSelectedChange,
    readingProgress,
    readingStatus,
    ridiselect,
    selected,
    selectMode,
    thumbnailUrl,
    thumbnailWidth,
    title,
    unitBook = false,
    updateBadge,
    ...extraProps
  } = props;

  return (
    <div
      css={styles.portraitBook}
      className={classNames(['PortraitBook', className])}
      {...extraProps}
    >
      <div css={styles.thumbnail}>
        <LibraryBook.Thumbnail
          adultBadge={adultBadge}
          bookCount={bookCount}
          bookCountUnit={bookCountUnit}
          bookCountWrapper={bookCountWrapper}
          downloadProgress={downloadProgress}
          downloadStatus={downloadStatus}
          expired={expired}
          expiredAt={expiredAt}
          notAvailable={notAvailable}
          onSelectedChange={onSelectedChange}
          readingProgress={readingProgress}
          readingStatus={readingStatus}
          ridiselect={ridiselect}
          selected={selected}
          selectMode={selectMode}
          thumbnailUrl={thumbnailUrl}
          thumbnailWidth={thumbnailWidth}
          unitBook={unitBook}
          updateBadge={updateBadge}
          viewType={LibraryBook.ViewType.Portrait}
        />
      </div>
      <div css={styles.metadata}>
        {title && <LibraryBook.Title title={title}/>}
        {author && <LibraryBook.Author author={author}/>}
      </div>
    </div>
  );
};
