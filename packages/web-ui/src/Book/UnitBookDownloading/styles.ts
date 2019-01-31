import { keyframes } from "@emotion/core";
import { PositionProperty, WhiteSpaceProperty } from "csstype";

export enum UnitBookDownloadingSize {
  Small,
  Large,
};

export const wrapper = {
  cursor: 'pointer',
  '.Thumbnail & ': {
    position: 'absolute' as PositionProperty,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 100,
    background: 'rgba(0, 0, 0, .4)',
  },
};

const wrapperSize = (size: UnitBookDownloadingSize) => size === UnitBookDownloadingSize.Small ? 32 : 44;
export const downloading = (size: UnitBookDownloadingSize) => ({
  position: 'relative' as PositionProperty,
  borderRadius: '50%',
  background: '#1f8ce6',
  margin: '50% auto',
  width: wrapperSize(size),
  height: wrapperSize(size),
});

export const dotsWrapper = {
  position: 'absolute' as PositionProperty,
  left: '50%',
  top: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  whiteSpace: 'nowrap' as WhiteSpaceProperty,
};

const dotSize = () => 4;
const dotGap = (size: UnitBookDownloadingSize) => size === UnitBookDownloadingSize.Small ? 3 : 4;
const dotFlashing = keyframes({
  '0%': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  '50%, 100%': {
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
});

export const dot = (size: UnitBookDownloadingSize, index: number) => ({
  display: 'inline-block',
  width: dotSize(),
  height: dotSize(),
  borderRadius: '50%',
  backgroundColor: 'white',
  animation: `${dotFlashing} .8s infinite linear alternate`,
  animationDelay: `${index * .2}s`,
  marginLeft: index === 0 ? 0 : dotGap(size),
});