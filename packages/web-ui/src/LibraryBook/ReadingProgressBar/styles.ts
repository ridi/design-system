import { PositionProperty } from 'csstype';
import { merge } from 'lodash';
import { resetFont, resetLayout } from "../../styles";

export const readingProgressBar = merge({}, resetLayout, {
  position: 'relative',
  lineHeight: 0,
  '.Thumbnail & ': {
    marginBottom: 8,
  },
});

export const title = {
  display: 'block',
  fontSize: 0,
  width: 0,
  height: 0,
  overflow: 'hidden',
  color: 'transparent',
};

export const percentage = merge({}, resetFont, {
  display: 'block',
  fontSize: 12,
  color: '#808991',
  lineHeight: '15px',
  marginBottom: 3,
  '.Thumbnail & ': {
    fontSize: 0,
    lineHeight: 0,
    marginBottom: 0,
    width: 0,
    height: 0,
    overflow: 'hidden',
    color: 'transparent',
  },
});

export const progressBG = {
  display: 'inline-block',
  borderRadius: 4,
  background: '#d1d5d9',
  overflow: 'hidden',
  position: 'relative' as PositionProperty,
  width: 80,
  height: 4,
  '.Thumbnail & ': {
    width: '100%',
  },
};

export const progress = {
  display: 'block',
  position: 'absolute' as PositionProperty,
  left: 0,
  top: 0,
  width: 0,
  height: '100%',
  borderRadius: 4,
  background: '#808991',
  color: '#808991',
};
