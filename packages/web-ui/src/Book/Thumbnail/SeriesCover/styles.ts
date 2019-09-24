import { css } from '@emotion/core';
import { RGB } from ".";

export const seriesCover = (coverMargin:number, dominantColor:RGB) => css`
  width: 100%;
  height: 100%;
  background: rgb(${dominantColor.r}, ${dominantColor.g}, ${dominantColor.b});
  position: absolute;
  left: ${coverMargin}px;
  bottom: ${coverMargin}px;
  ${coverShadow}
`;

const coverShadow = `
  &::after {
    display: block;
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, .1);
  }
`;