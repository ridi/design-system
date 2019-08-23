import { PositionProperty } from 'csstype';
import { resetFont, resetLayout } from "src/styles";

const PROGRESS_BAR_HEIGHT = 4;
const MARGIN_BOTTOM_FOR_THUMBNAIL_INSIDE = 8;

export const ProgressBarOutterHeight = PROGRESS_BAR_HEIGHT + MARGIN_BOTTOM_FOR_THUMBNAIL_INSIDE;
export const readingProgressBar = {
  ...resetLayout,
  position: 'relative' as PositionProperty,
  lineHeight: 0,
  '.Thumbnail & ': {
    fontSize: 0,
    position: 'absolute' as PositionProperty,
    left: 0,
    top: 0,
    width: '100%',
  },
};

export const title = {
  display: 'block',
  fontSize: 0,
  width: 0,
  height: 0,
  overflow: 'hidden',
  color: 'transparent',
};

export const percentage = {
  ...resetFont,
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
};

export const progressBG = {
  display: 'inline-block',
  borderRadius: PROGRESS_BAR_HEIGHT,
  background: '#d1d5d9',
  overflow: 'hidden',
  position: 'relative' as PositionProperty,
  width: 80,
  height: PROGRESS_BAR_HEIGHT,
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
  borderRadius: PROGRESS_BAR_HEIGHT,
  background: '#808991',
  color: '#808991',
};
