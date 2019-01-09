import { PositionProperty } from 'csstype';
import { merge } from 'lodash';
import { resetAppearance, resetLayout } from "../../styles";

export const checkbox = {
  display: 'block',
  position: 'absolute' as PositionProperty,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 100,
  cursor: 'pointer',
  background: 'rgba(0, 0, 0, .4)',
};

export const checkboxInput = merge({}, resetAppearance, resetLayout, {
  width: 0,
  height: 0,
});

export const iconWrapper = {
  display: 'block',
  width: 40,
  height: 40,
  borderRadius: 44,
  border: '2px solid rgba(0, 0, 0, .3)',
  position: 'absolute' as PositionProperty,
  left: '50%',
  top: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  overflow: 'hidden',
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