import classNames from 'classnames';
import * as React from 'react';
import * as LibraryBook from '../';

export interface LandscapeBookProps extends
  LibraryBook.AnnotationsProps,
  LibraryBook.AuthorProps,
  LibraryBook.ThumbnailProps,
  LibraryBook.TitleProps {
    className?: string;
    [extraKey: string]: any;
  }

export const LandscapeBook: React.SFC<LandscapeBookProps> = (props) => {
  const {
    adultBadge,
    annotations = {
      bookMarkCount: 0,
      highlightCount: 0,
      memoCount: 0,
    },
    author,
    bookCount,
    bookCountUnit,
    bookCountWrapper,
    bookId,
    className,
    downloadProgress,
    downloadSize,
    downloadStatus,
    expired = false,
    expiredAt,
    notAvailable = false,
    onSelected,
    readingProgress,
    readingStatus,
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
      className={classNames(['LandscapeBook', className])}
      {...extraProps}
    >
      <div className="LandscapeBook_Thumbnail">
        <LibraryBook.Thumbnail
          adultBadge={adultBadge}
          bookId={bookId}
          onSelected={(e) => {onSelected(e); }}
          readingStatus={readingStatus}
          selected={selected}
          selectMode={selectMode}
          thumbnailUrl={thumbnailUrl}
          thumbnailWidth={thumbnailWidth}
          updateBadge={updateBadge}
          viewType={LibraryBook.VIEW_TYPE.Landscape}
        />
      </div>
      <div className="LandscapeBook_Metadata">
        {title && <LibraryBook.Title title={title}/>}
        {author && <LibraryBook.Author author={author}/>}
        {ridiselect ? (
          <LibraryBook.Ridiselect />
        ) : expired ? (
          <LibraryBook.Expired />
        ) : expiredAt ? (
          <LibraryBook.ExpiredAt expiredAt={expiredAt} />
        ) : null}
      </div>
      <div className="LandscapeBook_Buttons">
        {unitBook ? (
          downloadStatus === LibraryBook.DOWNLOAD_STATUS.Downloading ? (
            <LibraryBook.UnitBookDownloading />
          ) : (
            bookCount ? (
              <LibraryBook.UnitBookCount
                bookCount={bookCount}
                bookCountUnit={bookCountUnit}
                bookCountWrapper={bookCountWrapper}
              />
            ) : null
          )
        ) : (
          readingStatus === LibraryBook.READING_STATUS.Opened ? (
            <>
              <LibraryBook.ReadingProgressBar readingProgress={readingProgress} />
              <LibraryBook.Annotations annotations={annotations} />
            </>
          ) : (
            !notAvailable ? (
              <>
                <LibraryBook.DownloadButton
                  downloadProgress={downloadProgress}
                  downloadSize={downloadSize}
                  downloadStatus={downloadStatus}
                />
              </>
            ) : null
          )
        )}
      </div>
    </div>
  );
};
