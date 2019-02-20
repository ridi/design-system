/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import * as React from 'react';
import { Book } from '../';
import * as styles from './styles';

export interface PortraitBookProps extends
  Book.AuthorProps,
  Book.ThumbnailProps,
  Book.TitleProps {
    additionalButton?: React.ReactElement<any>;
    additionalMetadata?: React.ReactElement<any>;
    className?: string;
    portraitStyles?: any;
    [extraKey: string]: any;
  }

export const PortraitBook: React.FunctionComponent<PortraitBookProps> = (props) => {
  const {
    additionalButton,
    additionalMetadata,
    adultBadge,
    author,
    className,
    children,
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
      className={classNames(['PortraitBook', className])}
      {...extraProps}
    >
      <div className="PortraitBook_Thumbnail" css={styles.thumbnail}>
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
      <div className="PortraitBook_Metadata" css={styles.metadata}>
        {title && <Book.Title title={title}/>}
        {author && <Book.Author author={author}/>}
        {additionalMetadata}
      </div>
      {additionalButton}
      {children}
    </div>
  );
};
