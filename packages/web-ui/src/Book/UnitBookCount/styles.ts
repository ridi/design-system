import { PositionProperty, WhiteSpaceProperty } from 'csstype';
import { resetAppearance, resetFont, resetLayout } from "src/styles";

export const unitBookCount = {
  ...resetAppearance,
  ...resetFont,
  ...resetLayout, 
  display: 'inline-block',
  position: 'relative' as PositionProperty,
  textDecoration: 'none',
  '.Thumbnail & ': {
    display: 'block',
    position: 'absolute' as PositionProperty,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 150,
  },
};

export const count = {
  display: 'block',
  padding: '5px 16px 5px 10px',
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
    bottom: 8,
    transform: 'translate3d(-50%, 0, 0)',
    borderColor: 'white',
    fontWeight: 700,
    color: 'white',
    background: 'rgba(0, 0, 0, .7)',
    boxShadow: '0 0 0 2px rgba(0, 0, 0, .7)',
  },
};

export const num = {
  fontSize: 12,
  paddingRight: 2,
};

export const icon = {
  position: 'absolute' as PositionProperty,
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
