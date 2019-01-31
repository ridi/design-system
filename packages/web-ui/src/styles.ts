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

export const resetAppearance = {
  appearance: 'none',
  background: 'none',
  boxShadow: 'none',
  border: 0,
};

export const resetFont = {
  color: 'black',
  fontFamily: defaultFontFamily,
  fontWeight: 400,
  letterSpacing: '-.4px',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
};

export const resetLayout = {
  padding: 0,
  margin: 0,
};

export const formElementHover = {
  borderColor: colors.slateGray50,
};

export const formElementFocus = {
  borderColor: colors.dodgerBlue50,
  boxShadow: `0 0 4px ${rgba(colors.dodgerBlue50, .1)}`,
};

export const formElementDisabled = {
  borderColor: colors.slateGray20,
  backgroundColor: colors.slateGray5,
  color: colors.slateGray20,
};

export const cursorDefault = {
  cursor: 'default',
};

export const cursorPointer = {
  cursor: 'pointer',
};

export const inheritFont = {
  color: 'inherit',
  letterSpacing: 'inherit',
  fontFamily: 'inherit',
};

export const displayHidden = {
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
};

export const lineClamp = (lineNum?: number) => ({
  display: '-webkit-box',
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
