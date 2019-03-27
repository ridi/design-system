import { PositionProperty } from 'csstype';
import { merge } from 'lodash';
import { DownloadStatus } from ".";
import { resetAppearance, resetFont, resetLayout } from "../../styles";

export enum DownloadButtonSize {
  Small = 28,
  Large = 32,
}

export const buttonWrapper = merge({}, resetLayout, {
  textAlign: 'right',
  paddingTop: 20,
  '.Thumbnail & ': {
    paddingTop: 0,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 100,
  },
});

export const blocked = merge({}, buttonWrapper, {
  '.Thumbnail & ': {
    background: 'rgba(0, 0, 0, .4)',
  },
});

export const downloadButton = (size: DownloadButtonSize, status: DownloadStatus) => {
  const defaultStyle = merge({}, resetAppearance, resetFont, resetLayout, {
    width: size,
    height: size,
    cursor: 'pointer',
    outline: 'transparent',
  });

  const optionalStyle = status === DownloadStatus.Downloading ? {
    position: 'relative',
    borderRadius: '50%',
    background: '#1F8CE6',
    '.Thumbnail & ': {
      position: 'absolute',
      right: 6,
      bottom: 6,
    },
  } : status === DownloadStatus.Downloadable ? {
    '.Thumbnail & ': {
      position: 'absolute',
      right: 6,
      bottom: 6,
    },
  } : {};

  return merge({}, defaultStyle, optionalStyle);
};

const iconDefaultStyle = {
  width: '100%',
  height: '100%',
};

export const downloadableIcon = merge({}, iconDefaultStyle, {
  '& circle': {
    fill: 'black',
    fillOpacity: 0.5,
    stroke: 'white',
  },
  '& path': {
    fill: 'white',
  },
});

export const waitingIcon = merge({}, iconDefaultStyle, {
  '& circle': {
    fill: '#F2F4F5',
    fillOpacity: 0.8,
  },
  '& path': {
    fill: '#9EA7AD',
    fillOpacity: 0.8,
  },
});

export const circle = ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  transform: 'rotate(0deg)',
  transition: 'transform .5s',
});

export const progressMask = (size: DownloadButtonSize, deg?: number) => merge({}, circle, {
  clip: `rect(0, ${size}px, ${size}px, ${size / 2}px)`,
}, deg && {
  transform: `rotate(${deg}deg)`,
});

export const progressFill = (size: DownloadButtonSize, deg: number) => merge({}, circle, {
  background: '#0077d9',
  clip: `rect(0, ${size / 2}px, ${size}px, 0)`,
  transform: `rotate(${deg}deg)`,
});

export const stopRect = (size: DownloadButtonSize) => {
  const top = (size - (size / 3.5)) / 2;
  const left = (size - (size / 3.5)) / 2;
  const width = size / 3.5;
  const height = size / 3.5;
  
  return ({
    position: 'absolute' as PositionProperty,
    top,
    left,
    width,
    height,
    boxShadow: '0 1px 2px 0 #0077d9',
    backgroundColor: 'white',
  });
};

export const downloadSize = merge({}, resetFont, resetLayout, {
  color: '#808991',
  fontSize: 12,
  marginTop: 5,
  lineHeight: '1.25em',
  '.Thumbnail & ': {
    marginTop: 0,
    width: 0,
    height: 0,
    fontSize: 0,
    overflow: 'hidden',
    lineHeight: 0,
    color: 'transparent',
  },
});
