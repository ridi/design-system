/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import * as React from 'react';
import * as Book from '../Book';
import { DownloadButtonSize } from '../DownloadButton/styles';
import { UnitBookDownloadingSize } from '../UnitBookDownloading/styles';
import { SeriesCover } from './SeriesCover';
import * as styles from './styles';

export interface ThumbnailProps extends
Book.DownloadButtonProps,
Book.ReadingProgressBarProps,
Book.ThumbnailImageProps {
    adultBadge?: boolean;
    children?: React.ReactNode;
    className?: string;
    expired?: boolean;
    expiredAt?: string;
    notAvailable?: boolean;
    onSelectedChange?: (e: React.SyntheticEvent<any>) => void;
    selectMode?: boolean;
    selected?: boolean;
    readingStatus?: Book.ReadingStatus;
    ridiSelect?: boolean;
    thumbnailChildrenSize?: ThumbnailChildrenSize;
    thumbnailLink?: React.ReactElement<any>;
    unitBook?: boolean;
    unitBookCount?: React.ReactElement<Book.UnitBookCountProps>;
    updateBadge?: boolean;
    useMaxHeight?: boolean;
    viewType?: Book.ViewType;
    series?: boolean;
    [extraKey: string]: any;
  }

export enum ThumbnailChildrenSize {
  XXSmall = 'XXSmall',
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge',
  XXLarge = 'XXLarge',
}

const getThumbnailChildrenSize = (width: string | number) => {
  const thumbnailWidthString = String(width).split('px')[0];
  const thumbnailWidth = Number(thumbnailWidthString);
  if (thumbnailWidthString.indexOf('%') !== -1) {
    // % width default size
    return ThumbnailChildrenSize.Medium;
  } else if (thumbnailWidth >= 180) {
    return ThumbnailChildrenSize.XLarge;
  } else if (thumbnailWidth >= 130) {
    return ThumbnailChildrenSize.Large;
  } else if (thumbnailWidth >= 110) {
    return ThumbnailChildrenSize.Medium;
  } else if (thumbnailWidth >= 100) {
    return ThumbnailChildrenSize.Small;
  } else if (thumbnailWidth >= 80) {
    return ThumbnailChildrenSize.XSmall;
  } else {
    return ThumbnailChildrenSize.XXSmall;
  }
};

export const getReadingStatus = (readingStatus: Book.ReadingStatus, viewType: Book.ViewType) => ({
  isUnread: readingStatus && readingStatus === Book.ReadingStatus.New,
  isOpened: readingStatus && readingStatus === Book.ReadingStatus.Opened && viewType === Book.ViewType.Portrait,
});

export const Thumbnail: React.FunctionComponent<ThumbnailProps> = (props) => {
  const {
    adultBadge = false,
    children,
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
    selected = false,
    selectMode = false,
    thumbnailChildrenSize,
    thumbnailLink,
    thumbnailTitle,
    thumbnailUrl,
    thumbnailWidth,
    unitBook = false,
    unitBookCount,
    updateBadge = false,
    useMaxHeight = false,
    viewType = Book.ViewType.Portrait,
    series = false,
    ...extraProps
  } = props;
  const childrenSize = thumbnailChildrenSize ? thumbnailChildrenSize : getThumbnailChildrenSize(thumbnailWidth);
  const { isUnread, isOpened } = getReadingStatus(readingStatus, viewType);
  return (
    <div
      css={styles.thumbnailLayout(thumbnailWidth, useMaxHeight, isUnread, isOpened)}
      className={classNames(['Thumbnail', className])}
      {...extraProps}
    >
      {isUnread && <Book.UnreadDot />}
      {isOpened && <Book.ReadingProgressBar readingProgress={readingProgress} />}
      <div css={styles.thumbnailImageWrapper(series, thumbnailWidth)}>
        {series && <SeriesCover thumbnailWidth={thumbnailWidth} thumbnailUrl={thumbnailUrl} />}
        {selectMode &&
          <Book.ThumbnailCheckbox
            onChange={onSelectedChange}
            checked={selected}
            size={childrenSize}
            series={series}
          />
        }
        <Book.ThumbnailImage thumbnailUrl={thumbnailUrl} thumbnailTitle={thumbnailTitle} thumbnailWidth={thumbnailWidth} />
        {adultBadge && <Book.AdultBadge />}
        {updateBadge && <Book.UpdateBadge />}
        {(notAvailable || selectMode || expired) && <div css={styles.thumbnailDimmed} />}
        {viewType === Book.ViewType.Portrait &&
          <React.Fragment>
            {unitBook && (
              <React.Fragment>
                {unitBookCount}
                {downloadStatus === Book.DownloadStatus.Downloading && !selectMode && <Book.UnitBookDownloading size={UnitBookDownloadingSize.Large} />}
              </React.Fragment>
            )}
            {!unitBook && (
              <React.Fragment>
                {!notAvailable &&
                  <Book.DownloadButton
                    downloadStatus={downloadStatus}
                    downloadProgress={downloadProgress}
                    size={DownloadButtonSize.Large}
                  />
                }
                {ridiselect ? (
                  <Book.Ridiselect size={childrenSize} />
                ) : expired ? (
                  <Book.Expired size={childrenSize} />
                ) : expiredAt ? (
                  <Book.ExpiredAt expiredAt={expiredAt} size={childrenSize} />
                ) : null}
              </React.Fragment>
            )}
          </React.Fragment>
        }
        {children}
        {notAvailable && !selectMode && <Book.NotAvailable size={childrenSize} />}
        {thumbnailLink && (
          <div css={styles.thumbnailLink}>{thumbnailLink}</div>
        )}
      </div>
    </div>
  );
};
