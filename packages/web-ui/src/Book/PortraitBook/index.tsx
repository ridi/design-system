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
    readingProgress,
    readingStatus,
    renderUnitBookCount,
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
        <Book.Thumbnail
          adultBadge={adultBadge}
          renderUnitBookCount={renderUnitBookCount}
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