import { PositionProperty } from 'csstype';
import { resetAppearance, resetLayout } from "src/styles";
import { ThumbnailChildrenSize } from '../Thumbnail';

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

export const iconWrapper = (size:ThumbnailChildrenSize = ThumbnailChildrenSize.Medium) => {
  let iconSize = 40;
  if (size === ThumbnailChildrenSize.Large) {
    iconSize = 50;
  } else if (size === ThumbnailChildrenSize.XLarge) {
    iconSize = 70;
  }

  return {
    display: 'block',
    width: iconSize,
    height: iconSize,
    borderRadius: '50%',
    border: '2px solid rgba(0, 0, 0, .3)',
    position: 'absolute' as PositionProperty,
    left: '50%',
    top: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    overflow: 'hidden',
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