/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import * as React from 'react';
import { Book } from '../';
import * as styles from './styles';

export interface LandscapeBookProps extends
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
    author,
    children,
    className,
    expired = false,
    expiredAt,
    landscapeStyles,
    notAvailable = false,
    onSelectedChange,
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
        {unitBook ? unitBookCount : null}
        {additionalButton}
      </div>
      {children}
    </div>
  );
};
