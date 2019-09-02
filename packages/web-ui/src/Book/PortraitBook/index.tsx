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
    expired = false,
    expiredAt,
    notAvailable = false,
    onSelectedChange,
    portraitStyles,
    ridiselect,
    selected,
    selectMode,
    series = false,
    thumbnailChildrenSize,
    thumbnailInnerAdditionalElement,
    thumbnailLink,
    thumbnailOuterAdditionalElement,
    thumbnailStyles,
    thumbnailTitle,
    thumbnailUrl,
    thumbnailWidth,
    title,
    unitBook = false,
    unitBookCount,
    updateBadge,
    useMaxHeight = true,
    ...extraProps
  } = props;

  return (
    <div
      css={[styles.portraitBook(thumbnailWidth), portraitStyles]}
      className={classNames(['PortraitBook', className])}
      {...extraProps}
    >
      <div className="PortraitBook_Thumbnail" css={styles.portraitBookThumbnailLayout(thumbnailWidth)}>
        <Book.Thumbnail
          adultBadge={adultBadge}
          expired={expired}
          expiredAt={expiredAt}
          notAvailable={notAvailable}
          onSelectedChange={onSelectedChange}
          ridiselect={ridiselect}
          selected={selected}
          selectMode={selectMode}
          series={series}
          thumbnailChildrenSize={thumbnailChildrenSize}
          thumbnailInnerAdditionalElement={thumbnailInnerAdditionalElement}
          thumbnailLink={thumbnailLink}
          thumbnailOuterAdditionalElement={thumbnailOuterAdditionalElement}
          thumbnailStyles={thumbnailStyles}
          thumbnailTitle={thumbnailTitle}
          thumbnailUrl={thumbnailUrl}
          thumbnailWidth={thumbnailWidth}
          unitBook={unitBook}
          unitBookCount={unitBookCount}
          updateBadge={updateBadge}
          useMaxHeight={useMaxHeight}
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
