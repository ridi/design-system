import { PositionProperty } from 'csstype';
import { merge } from 'lodash';
import { displayHidden, resetLayout } from "src/styles";
import { ThumbnailChildrenSize } from '../Thumbnail';

export const notAvailable = merge({}, resetLayout, {
  position: 'absolute' as PositionProperty,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  opacity: .4,
  zIndex: 100,
});

export const icon = (size:ThumbnailChildrenSize = ThumbnailChildrenSize.Medium) => {
  let iconSize = 40;
  if (size === ThumbnailChildrenSize.Large) {
    iconSize = 50;
  } else if (size === ThumbnailChildrenSize.XLarge) {
    iconSize = 70;
  }

  return {
    position: 'absolute' as PositionProperty,
    left: '50%',
    top: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    width: iconSize,
    height: iconSize,
    fill: 'black',
    padding: 2,
    borderRadius: '50%',
    background: '#f3f4f5',
  };
};

export const text = displayHidden;
