/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import * as React from 'react';
import * as LibraryBook from '../';
import * as styles from './styles';

export interface LandscapeBookProps extends
  LibraryBook.AnnotationsProps,
  LibraryBook.AuthorProps,
  LibraryBook.ThumbnailProps,
  LibraryBook.TitleProps {
    className?: string;
    [extraKey: string]: any;
  }

export const LandscapeBook: React.FunctionComponent<LandscapeBookProps> = (props) => {
  const {
    adultBadge,
    annotations = {
      bookMarkCount: 0,
      highlightCount: 0,
      memoCount: 0,
    },
    author,
    bookCount,
    bookCountUnit,
    bookCountWrapper,
    bookId,
    className,
    downloadProgress,
    downloadSize,
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
      css={styles.landscapeBook}
      className={classNames(['LandscapeBook', className])}
      {...extraProps}
    >
      <div css={styles.thumbnail}>
        <LibraryBook.Thumbnail
          adultBadge={adultBadge}
          onSelectedChange={onSelectedChange}
          readingStatus={readingStatus}
          selected={selected}
          selectMode={selectMode}
          thumbnailUrl={thumbnailUrl}
          thumbnailWidth={thumbnailWidth}
          updateBadge={updateBadge}
          viewType={LibraryBook.ViewType.Landscape}
        />
      </div>
      <div css={styles.metadata}>
        {title && <LibraryBook.Title title={title}/>}
        {author && <LibraryBook.Author author={author}/>}
        {ridiselect ? (
          <LibraryBook.Ridiselect />
        ) : expired ? (
          <LibraryBook.Expired />
        ) : expiredAt ? (
          <LibraryBook.ExpiredAt expiredAt={expiredAt} />
        ) : null}
      </div>
      <div css={styles.buttons}>
        {unitBook ? (
          downloadStatus === LibraryBook.DownloadStatus.Downloading ? (
            <LibraryBook.UnitBookDownloading />
          ) : (
            bookCount ? (
              <LibraryBook.UnitBookCount
                bookCount={bookCount}
                bookCountUnit={bookCountUnit}
                bookCountWrapper={bookCountWrapper}
              />
            ) : null
          )
        ) : (
          readingStatus === LibraryBook.ReadingStatus.Opened ? (
            <React.Fragment>
              <LibraryBook.ReadingProgressBar readingProgress={readingProgress} />
              <LibraryBook.Annotations annotations={annotations} />
            </React.Fragment>
          ) : (
            !notAvailable ? (
              <React.Fragment>
                <LibraryBook.DownloadButton
                  downloadProgress={downloadProgress}
                  downloadSize={downloadSize}
                  downloadStatus={downloadStatus}
                />
              </React.Fragment>
            ) : null
          )
        )}
      </div>
    </div>
  );
};
