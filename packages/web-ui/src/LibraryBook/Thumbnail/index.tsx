/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import * as React from 'react';
import {
  AdultBadge,
  BookCountUnit,
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
  UnitBookCount,
  UnitBookCountProps,
  UnitBookDownloading,
  UnReadDot,
  UpdateBadge,
  ViewType,
} from '../';
import { DownloadButtonSize } from '../DownloadButton/styles';
import { UnitBookDownloadingSize } from '../UnitBookDownloading/styles';
import * as styles from './styles';

export interface ThumbnailProps extends
  DownloadButtonProps,
  ReadingProgressBarProps,
  ThumbnailImageProps,
  UnitBookCountProps {
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
    unitBook?: boolean;
    updateBadge?: boolean;
    viewType?: ViewType;
    thumbnailWidth?: number;
    [extraKey: string]: any;
  }

export const Thumbnail: React.FunctionComponent<ThumbnailProps> = (props) => {
  const {
    adultBadge = false,
    bookCount = 0,
    bookCountLinkUrl,
    bookCountUnit = BookCountUnit.Single,
    bookCountWrapper,
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
    thumbnailUrl,
    thumbnailWidth,
    unitBook = false,
    updateBadge = false,
    viewType = ViewType.Portrait,
    ...extraProps
  } = props;

  return (
    <div
      css={[styles.thumbnail, thumbnailWidth && styles.thumbnailWidth(thumbnailWidth)]}
      className={classNames(['Thumbnail', className])}
      {...extraProps}
    >
      {readingStatus && <React.Fragment>
        {readingStatus === ReadingStatus.New ? (
          <UnReadDot />
        ) : readingStatus === ReadingStatus.Opened && viewType === ViewType.Portrait ? (
          <ReadingProgressBar readingProgress={readingProgress} />
        ) : null}
      </React.Fragment>}
      <div css={styles.thumbnailImageWrapper}>
        {selectMode &&
          <ThumbnailCheckbox
            onChange={onSelectedChange}
            checked={selected}
          />
        }
        <ThumbnailImage thumbnailUrl={thumbnailUrl} />
        {adultBadge && <AdultBadge />}
        {updateBadge && <UpdateBadge />}
        {viewType === ViewType.Portrait &&
          <React.Fragment>
            {unitBook ? (
              <React.Fragment>
                {bookCount &&
                  <UnitBookCount
                    bookCount={bookCount}
                    bookCountUnit={bookCountUnit}
                    bookCountWrapper={bookCountWrapper}
                  />
                }
                {downloadStatus === DownloadStatus.Downloading && <UnitBookDownloading size={UnitBookDownloadingSize.Large} />}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {!notAvailable &&
                  <DownloadButton
                    downloadStatus={downloadStatus}
                    downloadProgress={downloadProgress}
                    size={DownloadButtonSize.Large}
                  />
                }
                {ridiselect ? (
                  <Ridiselect />
                ) : expired ? (
                  <Expired />
                ) : expiredAt ? (
                  <ExpiredAt expiredAt={expiredAt} />
                ) : null}
              </React.Fragment>
            )}
          </React.Fragment>
        }
        {children}
        {notAvailable && <NotAvailable />}
      </div>
    </div>
  );
};
