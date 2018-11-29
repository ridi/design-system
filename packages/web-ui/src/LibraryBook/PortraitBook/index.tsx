import classNames from 'classnames';
import * as React from 'react';
import * as LibraryBook from '../';

export interface PortraitBookProps extends
  LibraryBook.AuthorProps,
  LibraryBook.ThumbnailProps,
  LibraryBook.TitleProps {
    className?: string;
    [extraKey: string]: any;
  }

export const PortraitBook: React.SFC<PortraitBookProps> = (props) => {
  const {
    adultBadge,
    author,
    bookCount,
    bookCountUnit,
    bookCountWrapper,
    bookId,
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
      className={classNames(['PortraitBook', className])}
      {...extraProps}
    >
      <div className="PortraitBook_Thumbnail">
        <LibraryBook.Thumbnail
          adultBadge={adultBadge}
          bookCount={bookCount}
          bookCountUnit={bookCountUnit}
          bookCountWrapper={bookCountWrapper}
          bookId={bookId}
          downloadProgress={downloadProgress}
          downloadStatus={downloadStatus}
          expired={expired}
          expiredAt={expiredAt}
          notAvailable={notAvailable}
          onSelected={(e) => {onSelected(e); }}
          readingProgress={readingProgress}
          readingStatus={readingStatus}
          ridiselect={ridiselect}
          selected={selected}
          selectMode={selectMode}
          thumbnailUrl={thumbnailUrl}
          thumbnailWidth={thumbnailWidth}
          unitBook={unitBook}
          updateBadge={updateBadge}
          viewType={LibraryBook.VIEW_TYPE.Portrait}
        />
      </div>
      <div className="PortraitBook_Metadata">
        {title && <LibraryBook.Title title={title}/>}
        {author && <LibraryBook.Author author={author}/>}
      </div>
    </div>
  );
};
