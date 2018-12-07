import { css } from "@emotion/core";
import { DownloadStatus } from ".";
import { resetAppearance, resetFont, resetLayout } from "../../styles";

export enum DownloadButtonSize {
  Small = 28,
  Large = 32,
}

export const buttonWrapper = css([resetLayout, {
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
}]);

export const blocked = css([buttonWrapper, {
  '.Thumbnail & ': {
    background: 'rgba(0, 0, 0, .4)',
  },
}]);

export const downloadButton = (size: DownloadButtonSize, status: DownloadStatus) => {
  const defaultStyle = css([resetAppearance, resetFont, resetLayout, {
    backgroundColor: 'unset',
    width: size,
    height: size,
    cursor: 'pointer',
    outline: 'transparent',
  }]);

  const optionalStyle = status === DownloadStatus.Downloading ? css({
    position: 'relative',
    borderRadius: '50%',
    background: '#1F8CE6',
    '.Thumbnail & ': {
      position: 'absolute',
      right: 6,
      bottom: 6,
    },
  }) : {};

  return css([defaultStyle, optionalStyle]);
};

const iconDefaultStyle = css({
  width: '100%',
  height: '100%',
});

export const downloadableIcon = css([iconDefaultStyle, {
  '& circle': {
    fill: 'black',
    fillOpacity: 0.5,
    stroke: 'white',
  },
  '& path': {
    fill: 'white',
  },
}]);

export const waitingIcon = css([iconDefaultStyle, {
  '& circle': {
    fill: '#F2F4F5',
    fillOpacity: 0.8,
  },
  '& path': {
    fill: '#9EA7AD',
    fillOpacity: 0.8,
  },
}]);

export const circle = css({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  transform: 'rotate(0deg)',
  transition: 'transform .5s',
});

export const progressMask = (size: DownloadButtonSize, deg?: number) => css([circle, {
  clip: `rect(0, ${size}px, ${size}px, ${size / 2}px)`,
}, deg ? {
  transform: `rotate(${deg}deg)`,
} : {}]);

export const progressFill = (size: DownloadButtonSize, deg: number) => css([circle, {
  background: '#0077d9',
  clip: `rect(0, ${size / 2}px, ${size}px, 0`,
  transform: `rotate(${deg}deg)`,
}]);

export const stopRect = (size: DownloadButtonSize) => css({
  position: 'absolute',
  top: `${(size - (size / 3.5)) / 2}px`,
  left: `${(size - (size / 3.5)) / 2}px`,
  width: `${size / 3.5}px`,
  height: `${size / 3.5}px`,
  boxShadow: '0 1px 2px 0 #0077d9',
  backgroundColor: 'white',
});

export const downloadSize = css([resetFont, resetLayout, {
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
}]);
