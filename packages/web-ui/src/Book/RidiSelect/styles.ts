import { merge } from 'lodash';
import { resetFont, resetLayout } from "../../styles";

export const ridiselect = merge({}, resetFont, resetLayout, {
  position: 'relative',
  fontSize: 12,
  height: '1em',
  lineHeight: '1em',
  color: '#0077d9',
  padding: '0 0 0 16px',
  marginTop: 4,
  whiteSpace: 'nowrap',
  '.Thumbnail & ': {
    position: 'absolute',
    padding: '0 0 0 20px',
    marginTop: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    height: 18,
    lineHeight: '18px',
    boxSizing: 'border-box',
    background: 'rgba(0, 0, 0, .5)',
    color: 'white',
  },
});

export const ridiselectIcon = {
  position: 'absolute',
  left: 2,
  top: '50%',
  transform: 'translate3d(0, -50%, 0)',
  width: 10,
  height: 10,
  fill: '#0077d9',
  '.Thumbnail & ': {
    left: 5,
    fill: 'white',
  },
};
