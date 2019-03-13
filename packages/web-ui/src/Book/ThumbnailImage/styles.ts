import { BoxSizingProperty, PositionProperty } from "csstype";

export const THUMBNAIL_HEIGHT_RATIO = '162%'; // width : height = 1: 1.618
export const THUMBNAIL_SKELETON_HEIGHT_RATIO = '142%';

export const thumbnailImage = {
  display: 'inline-block',
  position: 'relative' as PositionProperty,
  lineHeight: 0,
  '&::after': {
    display: 'block',
    boxSizing: 'border-box' as BoxSizingProperty,
    position: 'absolute' as PositionProperty,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(
      to right,
      rgba(0, 0, 0, .2) 0,
      rgba(0, 0, 0, 0) 5%,
      rgba(0, 0, 0, 0) 95%,
      rgba(0, 0, 0, .2) 100%
    )`,
    border: 'solid 1px rgba(0, 0, 0, .1)',
    content: `''`,
  },
};

export const image = (isImageLoaded : boolean, thumbnailWidth : string | number = '100%') => {
  const backgroundImage = !isImageLoaded ? 'linear-gradient(147deg, #e6e8eb, #edeff2 55%, #e6e8eb)' : null;
  const paddingBottom = !isImageLoaded ? THUMBNAIL_SKELETON_HEIGHT_RATIO : null;
  const height = !isImageLoaded ? 0 : null;
  return ({
    display: 'block',
    width: thumbnailWidth,
    height,
    paddingBottom,
    backgroundImage,
  });
};
