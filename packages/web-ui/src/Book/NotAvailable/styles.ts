import { merge } from 'lodash';
import { displayHidden, resetLayout } from "../../styles";

export const notAvailable = merge({}, resetLayout, {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  background: 'black',
  opacity: .4,
  zIndex: 100,
});

export const icon = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  width: 40,
  height: 40,
  fill: 'black',
  padding: 2,
  borderRadius: 44,
  background: '#f3f4f5',
};

export const text = displayHidden;
