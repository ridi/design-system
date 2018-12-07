import { css } from '@emotion/core';
import colors from '@ridi/colors';
import { resetAppearance, resetFont, resetLayout } from '../styles';

export default css(
  resetAppearance,
  resetFont,
  resetLayout,
  {
    display: 'inline-block',
    fontSize: '13px',
    color: colors.slategray_60,
    cursor: 'pointer',
    transition: 'color .2s',
    WebkitTapHighlightColor: 'transparent',
  },
);
