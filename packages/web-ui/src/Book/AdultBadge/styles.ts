import { PositionProperty } from 'csstype';
import { resetLayout } from 'src/styles';

export const adultBadgeWrapper = {
  ...resetLayout,
  display: 'block',
  position: 'absolute' as PositionProperty,
  top: 2,
  right: 2,
};

export const adultBadge = {
  ...resetLayout,
  width: 20,
  height: 20,
};
