import { css } from '@emotion/core';
import colors from '@ridi/colors';
import { rgba } from 'polished';

export const defaultFontFamily = [
  'Helvetica Neue',
  'Apple SD Gothic Neo',
  'arial',
  '"나눔고딕"',
  'Nanum Gothic',
  '"돋움"',
  'Dotum',
  'Tahoma',
  'Geneva',
  'sans-serif',
].join(', ');

export const resetAppearance = css({
  appearance: 'none',
  background: 'none',
  boxShadow: 'none',
  border: 0,
});

export const resetFont = css({
  color: 'black',
  fontFamily: defaultFontFamily,
  fontWeight: 400,
  letterSpacing: '-.4px',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

export const resetLayout = css({
  padding: 0,
  margin: 0,
});

export const formElementHover = css({
  borderColor: colors.slategray_50,
});

export const formElementFocus = css({
  borderColor: colors.dodgerblue_50,
  boxShadow: `0 0 4px ${rgba(colors.dodgerblue_50, .1)}`,
});

export const formElementDisabled = css({
  borderColor: colors.slategray_20,
  background: colors.slategray_5,
  color: colors.slategray_20,
});

export const cursorDefault = css({
  cursor: 'default',
});

export const cursorPointer = css({
  cursor: 'pointer',
});

export const inheritFont = css({
  color: 'inherit',
  letterSpacing: 'inherit',
  fontFamily: 'inherit',
});

export const displayHidden = css({
  display: 'inline-block',
  width: 0,
  height: 0,
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  border: 0,
  color: 'rgba(0, 0, 0, 0)',
  fontSize: 0,
  lineHeight: 0,
  opacity: 0,
  clip: 'rect(0, 0, 0, 0)',
});

export const lineClamp = (lineNum?: number) => css({
  display: 'box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  whiteSpace: 'normal',
  wordBreak: 'break-all',
  wordWrap: 'break-word',
  lineHeight: '1.4em',
  textOverflow: 'ellipsis',
  WebkitLineClamp: lineNum,
  maxHeight: `${lineNum * 1.4}em`,
});