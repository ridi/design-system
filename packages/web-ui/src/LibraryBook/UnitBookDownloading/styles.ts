import {css, keyframes} from "@emotion/core";

export enum UnitBookDownloadingSize {
  Small,
  Large,
};

export const wrapper = css({
  cursor: 'pointer',
  '.Thumbnail & ': {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 100,
    background: 'rgba(0, 0, 0, .4)',
  },
});

const wrapperSize = (size: UnitBookDownloadingSize) => size === UnitBookDownloadingSize.Small ? 32 : 44;
export const downloading = (size: UnitBookDownloadingSize) => css({
  position: 'relative',
  borderRadius: '50%',
  background: '#1f8ce6',
  margin: '50% auto',
  width: wrapperSize(size),
  height: wrapperSize(size),
});

export const dotsWrapper = css({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
});

const dotSize = () => 4;
const dotGap = (size: UnitBookDownloadingSize) => size === UnitBookDownloadingSize.Small ? 3 : 4;
const dotFlashing = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 1);
  }
  50%, 100% {
    background-color: rgba(255, 255, 255, 0);
  }
`;

export const dot = (size: UnitBookDownloadingSize, index: number) => css({
  display: 'inline-block',
  width: dotSize(),
  height: dotSize(),
  borderRadius: '50%',
  backgroundColor: 'white',
  animation: `${dotFlashing} .8s infinite linear alternate`,
  animationDelay: `${index * .2}s`,
  marginLeft: index === 0 ? 0 : dotGap(size),
});