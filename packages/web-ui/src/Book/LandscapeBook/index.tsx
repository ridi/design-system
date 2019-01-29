/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { Book } from '../';
import * as styles from './styles';

export interface LandscapeBookProps extends
  Book.AnnotationsProps,
  Book.AuthorProps,
  Book.ThumbnailProps,
  Book.TitleProps {
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
    thumbnailLink,
    thumbnailTitle,
    thumbnailUrl,
    thumbnailWidth,
    title,
    unitBook = false,
    unitBookCount,
    updateBadge,
    ...extraProps
  } = props;

  return (
    <div
      css={styles.landscapeBook}
      className={`LandscapeBook ${className}`}
      {...extraProps}
    >
      <div css={styles.thumbnail}>
        <Book.Thumbnail
          adultBadge={adultBadge}
          notAvailable={notAvailable}
          onSelectedChange={onSelectedChange}
          readingStatus={readingStatus}
          selected={selected}
          selectMode={selectMode}
          thumbnailLink={thumbnailLink}
          thumbnailTitle={thumbnailTitle}
          thumbnailUrl={thumbnailUrl}
          thumbnailWidth={thumbnailWidth}
          updateBadge={updateBadge}
          viewType={Book.ViewType.Landscape}
        />
      </div>
      <div css={styles.metadata}>
        {title && <Book.Title title={title}/>}
        {author && <Book.Author author={author}/>}
        {ridiselect ? (
          <Book.Ridiselect />
        ) : expired ? (
          <Book.Expired />
        ) : expiredAt ? (
          <Book.ExpiredAt expiredAt={expiredAt} />
        ) : null}
      </div>
      <div css={styles.buttons}>
        {unitBook ? (
          downloadStatus === Book.DownloadStatus.Downloading ? (
            <Book.UnitBookDownloading />
          ) : unitBookCount
        ) : (
          readingStatus === Book.ReadingStatus.Opened ? (
            <React.Fragment>
              <Book.ReadingProgressBar readingProgress={readingProgress} />
              <Book.Annotations annotations={annotations} />
            </React.Fragment>
          ) : (
            !notAvailable ? (
              <React.Fragment>
                <Book.DownloadButton
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
