import { PositionProperty } from "csstype";
import { getMaxHeight } from "../Thumbnail/styles";

export const portraitBook = (thumbnailWidth: number) => ({
  width: thumbnailWidth,
});

export const portraitBookThumbnailLayout = (thumbnailWidth: number) => ({
  position: 'relative' as PositionProperty,
  lineHeight: 0,
  width: '100%',
  height: `${getMaxHeight(thumbnailWidth)}px`,
  '& .Thumbnail': {
    position: 'absolute' as PositionProperty,
    bottom: 0,
  },
});

export const metadata = {
  marginTop: 5,
};
