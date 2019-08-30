import { PositionProperty } from "csstype";
import { ProgressBarOutterHeight } from "../ReadingProgressBar/styles";
import { THUMBNAIL_HEIGHT_RATIO } from "../ThumbnailImage/styles";
import { UnreadDotOutterHeight } from "../UnreadDot/styles";

export const getMaxHeight = (width: number) => Math.floor(width * THUMBNAIL_HEIGHT_RATIO / 100);
export const getAdditionalPaddingTop = (hasUnreadDot: boolean, hasReadingProgressBar: boolean) => hasUnreadDot ? UnreadDotOutterHeight : hasReadingProgressBar ? ProgressBarOutterHeight : 0;

export const thumbnail = {
  lineHeight: 0,
  maxHeight: 'inherit',
  position: 'relative' as PositionProperty,
};

export const thumbnailLayout = (width: number, useMaxHeight: boolean, hasUnreadDot: boolean, hasReadingProgressBar: boolean) => ({
  ...thumbnail,
  width,
  maxHeight: useMaxHeight ? `${getMaxHeight(width)}px` : null,
  paddingTop: `${getAdditionalPaddingTop(hasUnreadDot, hasReadingProgressBar)}px`,
});

export const thumbnailDimmed = {
  display: 'block',
  position: 'absolute' as PositionProperty,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, .4)',
};

export const SERIES_BOOK_SCALE = 0.9;

export const thumbnailImageWrapper = (isSeries: boolean, thumbnailWidth: number) => {
  let seriesStyle = {};
  if (isSeries) {
    seriesStyle = {
      transform: `scale(${SERIES_BOOK_SCALE})`,
      transformOrigin: 'left bottom',
      position: 'relative' as PositionProperty,
    };
  }
  return {
    display: 'block',  
    position: 'relative' as PositionProperty,
    fontSize: 0,
    lineHeight: 0,
    maxHeight: 'inherit',
    ...seriesStyle,
  };
};

export const thumbnailLink = {
  position: 'absolute' as PositionProperty,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 150,
  'a, button': {
    display: 'block',
    position: 'absolute' as PositionProperty,
    width: '100%',
    height: '100%',
    background: 'transparent',
    lineHeight: '0',
    fontSize: 0,
    color: 'transparent',
    border: '0',
    boxShadow: 'none',
    outline: 'none',
  },
};
