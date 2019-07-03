/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import * as React from 'react';
import {
  AdultBadge,
  DownloadButton,
  DownloadButtonProps,
  DownloadStatus,
  Expired,
  ExpiredAt,
  NotAvailable,
  ReadingProgressBar,
  ReadingProgressBarProps,
  ReadingStatus,
  Ridiselect,
  ThumbnailCheckbox,
  ThumbnailImage,
  ThumbnailImageProps,
  UnitBookCountProps,
  UnitBookDownloading,
  UnreadDot,
  UpdateBadge,
  ViewType,
} from '../Book';
import { DownloadButtonSize } from '../DownloadButton/styles';
import { UnitBookDownloadingSize } from '../UnitBookDownloading/styles';
import * as styles from './styles';

export interface ThumbnailProps extends
  DownloadButtonProps,
  ReadingProgressBarProps,
  ThumbnailImageProps {
    adultBadge?: boolean;
    children?: React.ReactNode;
    className?: string;
    expired?: boolean;
    expiredAt?: string;
    notAvailable?: boolean;
    onSelectedChange?: (e: React.SyntheticEvent<any>) => void;
    selectMode?: boolean;
    selected?: boolean;
    readingStatus?: ReadingStatus;
    ridiSelect?: boolean;
    thumbnailChildrenSize?: ThumbnailChildrenSize;
    thumbnailLink?: React.ReactElement<any>;
    unitBook?: boolean;
    unitBookCount?: React.ReactElement<UnitBookCountProps>;
    updateBadge?: boolean;
    useMaxHeight?: boolean;
    viewType?: ViewType;
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

export const getReadingStatus = (readingStatus: ReadingStatus, viewType: ViewType) => ({
  isUnread: readingStatus && readingStatus === ReadingStatus.New,
  isOpened: readingStatus && readingStatus === ReadingStatus.Opened && viewType === ViewType.Portrait,
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
    viewType = ViewType.Portrait,
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
      {isUnread && <UnreadDot />}
      {isOpened && <ReadingProgressBar readingProgress={readingProgress} />}
      <div css={styles.thumbnailImageWrapper}>
        {selectMode &&
          <ThumbnailCheckbox
            onChange={onSelectedChange}
            checked={selected}
            size={childrenSize}
          />
        }
        <ThumbnailImage thumbnailUrl={thumbnailUrl} thumbnailTitle={thumbnailTitle} thumbnailWidth={thumbnailWidth} />
        {adultBadge && <AdultBadge />}
        {updateBadge && <UpdateBadge />}
        {(notAvailable || selectMode || expired) && <div css={styles.thumbnailDimmed} />}
        {viewType === ViewType.Portrait &&
          <React.Fragment>
            {unitBook && (
              <React.Fragment>
                {unitBookCount}
                {downloadStatus === DownloadStatus.Downloading && !selectMode && <UnitBookDownloading size={UnitBookDownloadingSize.Large} />}
              </React.Fragment>
            )}
            {!unitBook && (
              <React.Fragment>
                {!notAvailable &&
                  <DownloadButton
                    downloadStatus={downloadStatus}
                    downloadProgress={downloadProgress}
                    size={DownloadButtonSize.Large}
                  />
                }
                {ridiselect ? (
                  <Ridiselect size={childrenSize} />
                ) : expired ? (
                  <Expired size={childrenSize} />
                ) : expiredAt ? (
                  <ExpiredAt expiredAt={expiredAt} size={childrenSize} />
                ) : null}
              </React.Fragment>
            )}
          </React.Fragment>
        }
        {children}
        {notAvailable && !selectMode && <NotAvailable size={childrenSize} />}
        {thumbnailLink && (
          <div css={styles.thumbnailLink}>{thumbnailLink}</div>
        )}
      </div>
    </div>
  );
};
