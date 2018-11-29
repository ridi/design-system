import classNames from 'classnames';
import * as React from 'react';
import {
  AdultBadge,
  BOOK_COUNT_UNIT,
  BookCountProps,
  Checkbox,
  DOWNLOAD_STATUS,
  DownloadButton,
  DownloadStatusProps,
  Expired,
  ExpiredAt,
  NotAvailable,
  READING_STATUS,
  ReadingProgressBar,
  ReadingProgressBarProps,
  Ridiselect,
  SelectProps,
  ThumbnailImage,
  ThumbnailImageProps,
  UnitBookCount,
  UnitBookDownloading,
  UnReadDot,
  UpdateBadge,
  VIEW_TYPE,
} from '../';

export interface ThumbnailProps extends
  BookCountProps,
  DownloadStatusProps,
  ReadingProgressBarProps,
  SelectProps,
  ThumbnailImageProps {
    adultBadge?: boolean;
    bookId: string;
    children?: React.ReactNode;
    className?: string;
    expired?: boolean;
    expiredAt?: string;
    notAvailable?: boolean;
    readingStatus?: READING_STATUS;
    ridiSelect?: boolean;
    unitBook?: boolean;
    updateBadge?: boolean;
    viewType?: VIEW_TYPE;
    thumbnailWidth?: number;
    [extraKey: string]: any;
  }

export const Thumbnail: React.SFC<ThumbnailProps> = (props) => {
  const {
    adultBadge = false,
    bookCount = 0,
    bookCountLinkUrl,
    bookCountUnit = BOOK_COUNT_UNIT.Single,
    bookCountWrapper,
    children,
    className,
    downloadProgress,
    downloadStatus,
    expired = false,
    expiredAt,
    notAvailable = false,
    onSelected,
    readingProgress,
    readingStatus,
    ridiselect,
    selected = false,
    selectMode = false,
    thumbnailUrl,
    thumbnailWidth,
    unitBook = false,
    updateBadge = false,
    viewType = VIEW_TYPE.Portrait,
    ...extraProps
  } = props;
  const width = { width: `${thumbnailWidth}px` };

  return (
    <div
      className={classNames(['Thumbnail', className])}
      style={thumbnailWidth ? width : {}}
      {...extraProps}
    >
      {readingStatus && <>
        {readingStatus === READING_STATUS.New ? (
          <UnReadDot />
        ) : readingStatus === READING_STATUS.Opened && viewType === VIEW_TYPE.Portrait ? (
          <ReadingProgressBar readingProgress={readingProgress} />
        ) : null}
      </>}
      <div className="Thumbnail_ThumbnailImageWrapper">
        {selectMode &&
          <Checkbox
            onSelected={(e) => {onSelected(e); }}
            selectMode={selectMode}
            selected={selected}
          />
        }
        <ThumbnailImage thumbnailUrl={thumbnailUrl} />
        {adultBadge && <AdultBadge />}
        {updateBadge && <UpdateBadge />}
        {viewType === VIEW_TYPE.Portrait &&
          <>
            {unitBook ? (
              <>
                {bookCount &&
                  <UnitBookCount
                    bookCount={bookCount}
                    bookCountUnit={bookCountUnit}
                    bookCountWrapper={bookCountWrapper}
                  />
                }
                {downloadStatus === DOWNLOAD_STATUS.Downloading && <UnitBookDownloading size="large" />}
              </>
            ) : (
              <>
                {!notAvailable &&
                  <DownloadButton
                    downloadStatus={downloadStatus}
                    downloadProgress={downloadProgress}
                    size="large"
                  />
                }
                {ridiselect ? (
                  <Ridiselect />
                ) : expired ? (
                  <Expired />
                ) : expiredAt ? (
                  <ExpiredAt expiredAt={expiredAt} />
                ) : null}
              </>
            )}
          </>
        }
        {children}
        {notAvailable && <NotAvailable />}
      </div>
    </div>
  );
};
