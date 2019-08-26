import { BoxSizingProperty, PositionProperty, WhiteSpaceProperty } from "csstype";
import { resetFont } from "src/styles";
import { ThumbnailChildrenSize } from "../Thumbnail";

export const expiredAt = (size:ThumbnailChildrenSize = ThumbnailChildrenSize.Medium, isRemainTime: boolean) => {
  let fontSize = 12;
  let height = 18;
  let paddingLeft = 20;
  if (size === ThumbnailChildrenSize.Large) {
    height = 24;
  } else if (size === ThumbnailChildrenSize.XLarge) {
    fontSize = 15;
    height = 34;
    paddingLeft = 26;
  }
  const lineHeight = `${height}px`;

  return {
    ...resetFont,
    position: 'relative' as PositionProperty,
    fontSize: 12,
    height: '1em',
    lineHeight: '1em',
    color: '#0077d9',
    padding: isRemainTime ? '0 0 0 16px' : '0',
    margin: '4px 0 0 0',
    whiteSpace: 'nowrap' as WhiteSpaceProperty,
    '.Thumbnail & ': {
      position: 'absolute' as PositionProperty,
      padding: isRemainTime ? `0 0 0 ${paddingLeft}px` : '0',
      marginTop: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      boxSizing: 'border-box' as BoxSizingProperty,
      background: 'rgba(0, 0, 0, .5)',
      color: 'white',
      fontSize,
      height,
      lineHeight,
    },
  };
};

export const expiredAtIcon = (size:ThumbnailChildrenSize = ThumbnailChildrenSize.Medium) => {
  let iconSize = 10;
  let left = 4;
  if (size === ThumbnailChildrenSize.XLarge) {
    iconSize = 14;
    left = 8;
  }
  return {
    position: 'absolute' as PositionProperty,
    left: 2,
    top: '50%',
    transform: 'translate3d(0, -50%, 0)',
    width: 10,
    height: 10,
    fill: '#0077d9',
    '.Thumbnail & ': {
      left,
      width: iconSize,
      height: iconSize,
      fill: 'white',
    },
  };
};

export const remainText = {
  '.Thumbnail &': {
    display: 'none',
  },
};