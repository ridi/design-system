import { PositionProperty } from 'csstype';
import { resetAppearance, resetLayout } from "src/styles";
import { ThumbnailChildrenSize } from '../Thumbnail';
import { SERIES_BOOK_SCALE } from '../Thumbnail/styles';

export const checkbox = {
  display: 'block',
  position: 'absolute' as PositionProperty,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 200,
  cursor: 'pointer',
};

export const checkboxInput = {
  ...resetAppearance,
  ...resetLayout, 
  width: 0,
  height: 0,
};

export const iconWrapper = (size:ThumbnailChildrenSize = ThumbnailChildrenSize.Medium, series:boolean) => {
  let iconSize = 40;
  if (size === ThumbnailChildrenSize.Large) {
    iconSize = 50;
  } else if (size === ThumbnailChildrenSize.XLarge) {
    iconSize = 70;
  }
  const transform = series ? {
    transform: `scale(${2 - SERIES_BOOK_SCALE}) translate3d(-50%, -50%, 0)`,
    transformOrigin: 'left top',
  } : {
    transform: 'translate3d(-50%, -50%, 0)',
  };

  return {
    display: 'block',
    width: iconSize,
    height: iconSize,
    borderRadius: '50%',
    border: '2px solid rgba(0, 0, 0, .3)',
    position: 'absolute' as PositionProperty,
    left: '50%',
    top: '50%',
    overflow: 'hidden',
    ...transform,
  };
};

export const checkboxIcon = (isActive: boolean) => {
  const background = isActive ? '#1f8ce6' : 'rgba(0, 0, 0, .3)';
  return ({
    width: '100%',
    height: '100%',
    margin: 0,
    fill: 'white',
    background,
  });
}