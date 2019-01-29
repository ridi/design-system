/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { Book } from '../';
import * as styles from './styles';

export interface PortraitBookProps extends
  Book.AuthorProps,
  Book.ThumbnailProps,
  Book.TitleProps {
    portraitStyles?: any;
    className?: string;
    [extraKey: string]: any;
  }

export const PortraitBook: React.FunctionComponent<PortraitBookProps> = (props) => {
  const {
    adultBadge,
    author,
    className,
    downloadProgress,
    downloadStatus,
    expired = false,
    expiredAt,
    notAvailable = false,
    onSelectedChange,
    portraitStyles,
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
      css={[styles.portraitBook, portraitStyles]}
      className={`PortraitBook ${className}`}
      {...extraProps}
    >
      <div css={styles.thumbnail}>
        <Book.Thumbnail
          adultBadge={adultBadge}
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
          thumbnailLink={thumbnailLink}
          thumbnailTitle={thumbnailTitle}
          thumbnailUrl={thumbnailUrl}
          thumbnailWidth={thumbnailWidth}
          unitBook={unitBook}
          unitBookCount={unitBookCount}
          updateBadge={updateBadge}
          viewType={Book.ViewType.Portrait}
        />
      </div>
      <div css={styles.metadata}>
        {title && <Book.Title title={title}/>}
        {author && <Book.Author author={author}/>}
      </div>
    </div>
  );
};
