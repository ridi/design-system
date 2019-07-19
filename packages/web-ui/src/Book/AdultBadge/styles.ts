import { merge } from 'lodash';
import { resetLayout } from 'src/styles';

export const adultBadgeWrapper = merge({}, resetLayout, {
  display: 'block',
  position: 'absolute',
  top: 2,
  right: 2,
});
export const adultBadge = merge({}, resetLayout, {
  width: 20,
  height: 20,
});
