import { PositionProperty } from "csstype";
import { getAdditionalPaddingTop, getMaxHeight } from "../Thumbnail/styles";

export const portraitBook = (thumbnailWidth: number) => ({
  width: thumbnailWidth,
});

export const portraitBookThumbnailLayout = (thumbnailWidth: number,  hasUnreadDot: boolean, hasReadingProgressBar: boolean) => ({
  position: 'relative' as PositionProperty,
  lineHeight: 0,
  width: '100%',
  height: `${getMaxHeight(thumbnailWidth) + getAdditionalPaddingTop(hasUnreadDot, hasReadingProgressBar)}px`,
  '& .Thumbnail': {
    position: 'absolute' as PositionProperty,
    bottom: 0,
  },
});

export const metadata = {
  marginTop: 5,
};
