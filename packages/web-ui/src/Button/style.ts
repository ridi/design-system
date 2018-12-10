import { css } from '@emotion/core';
import colors from '@ridi/colors';
import { rgba } from 'polished';
import { resetAppearance, resetFont, resetLayout } from '../styles';

const buttonColors = {
  gray_50: colors.slategray_50,
  gray_60: colors.slategray_60,
};

const boxShadow = {
  gray_50: `0 1px 1px 0 ${rgba(buttonColors.gray_50, .3)}`,
};

export default css(
  resetAppearance,
  resetFont,
  resetLayout,

  {
    WebkitTapHighlightColor: 'transparent',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    border: `1px solid ${buttonColors.gray_50}`,
    borderRadius: '4px',
    background: buttonColors.gray_50,
    color: 'white',
    fontSize: '13px',
    fontWeight: 700,
    lineHeight: '32px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    boxShadow: boxShadow.gray_50,
    userSelect: 'none',
    verticalAlign: 'baseline',
    textDecoration: 'none',
    transition: 'background .2s, color .2s',

    '&:not(:disabled)': {
      cursor: 'pointer',

      '&:hover': {
        background: buttonColors.gray_60,
      },
    },

    '&:disabled': {
      opacity: .5,
    },
  },
);
