/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import * as React from 'react';
import { Book } from '../';
import * as styles from './styles';

export interface LandscapeBookProps extends
  Book.AnnotationsProps,
  Book.AuthorProps,
  Book.ThumbnailProps,
  Book.TitleProps {
    additionalButton?: React.ReactElement<any>;
    additionalMetadata?: React.ReactElement<any>;
    className?: string;
    landscapeStyles?: any;
    [extraKey: string]: any;
  }

export const LandscapeBook: React.FunctionComponent<LandscapeBookProps> = (props) => {
  const {
    additionalButton,
    additionalMetadata,
    adultBadge,
    annotations = {
      bookMarkCount: 0,
      highlightCount: 0,
      memoCount: 0,
    },
    author,
    children,
    className,
    downloadProgress,
    downloadSize,
    downloadStatus,
    expired = false,
    expiredAt,
    landscapeStyles,
    notAvailable = false,
    onSelectedChange,
    readingProgress,
    readingStatus,
    ridiselect,
    selected,
    selectMode,
    thumbnailChildrenSize,
    thumbnailLink,
    thumbnailTitle,
    thumbnailUrl,
    thumbnailWidth,
    title,
    unitBook = false,
    unitBookCount,
    updateBadge,
    useMaxHeight = false,
    ...extraProps
  } = props;

  return (
    <div
      css={[styles.landscapeBook, landscapeStyles]}
      className={classNames(['LandscapeBook', className])}
      {...extraProps}
    >
      <div className="LandscapeBook_Thumbnail" css={styles.thumbnail}>
        <Book.Thumbnail
          adultBadge={adultBadge}
          notAvailable={notAvailable}
          onSelectedChange={onSelectedChange}
          readingStatus={readingStatus}
          selected={selected}
          selectMode={selectMode}
          thumbnailChildrenSize={thumbnailChildrenSize}
          thumbnailLink={thumbnailLink}
          thumbnailTitle={thumbnailTitle}
          thumbnailUrl={thumbnailUrl}
          thumbnailWidth={thumbnailWidth}
          updateBadge={updateBadge}
          useMaxHeight={useMaxHeight}
          viewType={Book.ViewType.Landscape}
        />
      </div>
      <div className="LandscapeBook_Metadata" css={styles.metadata}>
        {title && <Book.Title title={title}/>}
        {author && <Book.Author author={author}/>}
        {ridiselect ? (
          <Book.Ridiselect />
        ) : expired ? (
          <Book.Expired />
        ) : expiredAt ? (
          <Book.ExpiredAt expiredAt={expiredAt} />
        ) : null}
        {additionalMetadata}
      </div>
      <div className="LandscapeBook_Buttons" css={styles.buttons}>
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
        {additionalButton}
      </div>
      {children}
    </div>
  );
};
