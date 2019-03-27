import { PositionProperty } from "csstype";
import { THUMBNAIL_HEIGHT_RATIO } from "../ThumbnailImage/styles";

export const portraitBook = (thumbnailWidth: number | string) => ({
  width: thumbnailWidth,
});

export const thumbnail = {
  position: 'relative' as PositionProperty,
  lineHeight: 0,
  width: '100%',
  height: 'auto',
  paddingBottom: THUMBNAIL_HEIGHT_RATIO,
  '& .Thumbnail': {
    position: 'absolute' as PositionProperty,
    bottom: 0,
  },
};

export const metadata = {
  marginTop: 5,
};
