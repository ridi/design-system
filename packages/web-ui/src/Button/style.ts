import { css } from '@emotion/core';
import colors from '@ridi/colors';
import { rgba } from 'polished';
import { resetAppearance, resetFont, resetLayout } from '../styles';
import { ButtonProps } from './index';

const buttonColors = {
  blue_10: colors.dodgerblue_10,
  blue_50: colors.dodgerblue_50,
  blue_60: colors.dodgerblue_60,

  brown_10: colors.brown_10,
  brown_50: colors.brown_50,
  brown_60: colors.brown_60,

  gray_10: colors.slategray_10,
  gray_20: colors.slategray_20,
  gray_50: colors.slategray_50,
  gray_60: colors.slategray_60,
};

const boxShadow = {
  blue_50: `0 1px 1px 0 ${rgba(buttonColors.blue_50, .3)}`,

  brown_50: `0 1px 1px 0 ${rgba(buttonColors.brown_50, .3)}`,

  gray_20: `0 1px 1px 0 ${rgba(buttonColors.gray_20, .3)}`,
  gray_50: `0 1px 1px 0 ${rgba(buttonColors.gray_50, .3)}`,
};

export default ({ color, outline }: ButtonProps) => css(
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
    border: '1px solid',
    borderRadius: '4px',
    fontSize: '13px',
    fontWeight: 700,
    lineHeight: '32px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    verticalAlign: 'baseline',
    textDecoration: 'none',
    transition: 'background .2s, color .2s',

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:disabled': {
      opacity: .5,
    },
  },

  (() => {
    switch (color) {
      case 'blue':
        return outline ? {
          color: buttonColors.blue_50,
          backgroundColor: 'white',
          borderColor: buttonColors.blue_50,
          boxShadow: boxShadow.blue_50,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.blue_10,
            },
          },
        } : {
          color: 'white',
          backgroundColor: buttonColors.blue_50,
          borderColor: buttonColors.blue_60,
          boxShadow: boxShadow.blue_50,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.blue_60,
            },
          },
        };
      case 'brown':
        return outline ? {
          color: buttonColors.brown_50,
          backgroundColor: 'white',
          borderColor: buttonColors.brown_50,
          boxShadow: boxShadow.brown_50,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.brown_10,
            },
          },
        } : {
          color: 'white',
          backgroundColor: buttonColors.brown_50,
          borderColor: buttonColors.brown_60,
          boxShadow: boxShadow.brown_50,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.brown_60,
            },
          },
        };
      case 'gray':
      default:
        return outline ? {
          color: buttonColors.gray_50,
          backgroundColor: 'white',
          borderColor: buttonColors.gray_20,
          boxShadow: boxShadow.gray_20,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.gray_10,
            },
          },
        } : {
          color: 'white',
          backgroundColor: buttonColors.gray_50,
          borderColor: buttonColors.gray_60,
          boxShadow: boxShadow.gray_50,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.gray_60,
            },
          },
        };
    }
  })(),
);
