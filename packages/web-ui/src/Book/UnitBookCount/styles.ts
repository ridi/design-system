import { DisplayProperty, PositionProperty, WhiteSpaceProperty } from 'csstype';
import { merge } from 'lodash';
import { resetAppearance, resetFont, resetLayout } from "../../styles";

export const unitBookCount = merge({}, resetAppearance, resetFont, resetLayout, {
  display: 'inline-block',
  position: 'relative',
  textDecoration: 'none',
  '.Thumbnail & ': {
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 150,
  },
});

export const count = {
  display: 'block',
  padding: '3px 15px 4px 7px',
  border: '1px solid #9ea7ad',
  height: '1em',
  lineHeight: '1em',
  fontSize: 12,
  fontWeight: 600,
  color: '#525a61',
  borderRadius: 50,
  whiteSpace: 'nowrap' as WhiteSpaceProperty,
  '.Thumbnail & ': {
    position: 'absolute' as PositionProperty,
    left: '50%',
    bottom: 10,
    transform: 'translate3d(-50%, 0, 0)',
    borderColor: 'white',
    fontWeight: 700,
    color: 'white',
    background: 'rgba(0, 0, 0, .7)',
    boxShadow: '0 0 0 1px rgba(0, 0, 0, .7)',
  },
};

export const num = {
  fontSize: 11,
};

export const icon = {
  position: 'absolute',
  right: 7,
  top: '50%',
  transform: 'translate3d(0, -50%, 0)',
  width: 5,
  height: 5,
  fill: '#636c73',
  '.Thumbnail & ': {
    fill: 'white',
  },
};
