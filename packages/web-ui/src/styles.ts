import colors from '@ridi/colors';
import { rgba } from 'polished';

const defaultFontFamily = `Helvetica Neue, Apple SD Gothic Neo, arial, '나눔고딕', Nanum Gothic, '돋움', Dotum, Tahoma, Geneva, sans-serif`;

export const resetAppearance = {
  appearance: 'none',
  border: 'none',
};

export const resetFont = {
  fontFamily: defaultFontFamily,
  fontWeight: 400,
  letterSpacing: '-.03em',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
};

export const resetLayout = {
  margin: 0,
  padding: 0,
};

export const formElementHover = {
  borderColor: colors.slategray_50,
};

export const formElementFocus = {
  borderColor: colors.dodgerblue_50,
  boxShadow: `0 0 4px ${rgba(colors.dodgerblue_50, .1)}`,
};

export const formElementDisabled = {
  borderColor: colors.slategray_20,
  backgroundColor: colors.slategray_5,
  color: colors.slategray_20,
};
