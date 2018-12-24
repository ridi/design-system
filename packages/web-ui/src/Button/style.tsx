import { keyframes } from '@emotion/core';
import colors from '@ridi/colors';
import { rgba } from 'polished';
import * as React from 'react';
import { mergeStyles, resetAppearance, resetFont, resetLayout } from '../styles';
import { Svg } from '../Svg';
import { ButtonProps } from './index';
import Spinner from './spinner.svg';

const buttonColors = {
  blue10: colors.dodgerblue_10,
  blue50: colors.dodgerblue_50,
  blue60: colors.dodgerblue_60,

  brown10: colors.brown_10,
  brown50: colors.brown_50,
  brown60: colors.brown_60,

  gray10: colors.slategray_10,
  gray20: colors.slategray_20,
  gray50: colors.slategray_50,
  gray60: colors.slategray_60,
};

const boxShadow = {
  blue50: `0 1px 1px 0 ${rgba(buttonColors.blue50, .3)}`,

  brown50: `0 1px 1px 0 ${rgba(buttonColors.brown50, .3)}`,

  gray20: `0 1px 1px 0 ${rgba(buttonColors.gray20, .3)}`,
  gray50: `0 1px 1px 0 ${rgba(buttonColors.gray50, .3)}`,
};

export default ({ color, disabled, outline, size, spinner, thickBorder }: ButtonProps) => mergeStyles(
  resetAppearance,
  resetFont,
  resetLayout,

  {
    display: 'inline-block',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 13,
    fontWeight: 700,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    verticalAlign: 'baseline',
    textDecoration: 'none',
    transition: 'background .2s, color .2s',
    WebkitTapHighlightColor: 'transparent',

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:disabled': {
      opacity: .5,
    },
  },

  thickBorder && {
    borderWidth: 2,
  },

  (style) => ({
    padding: `0 ${20 - style.borderWidth}px`,
  }),

  (style) => {
    switch (size) {
      case 'small':
        return {
          lineHeight: `${26 - 2 * style.borderWidth}px`,
        };
      case 'large':
        return {
          lineHeight: `${42 - 2 * style.borderWidth}px`,
        };
      case 'medium':
      default:
        return {
          lineHeight: `${32 - 2 * style.borderWidth}px`,
        };
    }
  },

  () => {
    switch (color) {
      case 'blue':
        return {
          color: 'white',
          backgroundColor: buttonColors.blue50,
          borderColor: buttonColors.blue60,
          boxShadow: boxShadow.blue50,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.blue60,
            },
          },
        };
      case 'brown':
        return {
          color: 'white',
          backgroundColor: buttonColors.brown50,
          borderColor: buttonColors.brown60,
          boxShadow: boxShadow.brown50,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.brown60,
            },
          },
        };
      case 'gray':
      default:
        return {
          color: 'white',
          backgroundColor: buttonColors.gray50,
          borderColor: buttonColors.gray60,
          boxShadow: boxShadow.gray50,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.gray60,
            },
          },
        };
    }
  },

  outline && (() => {
    switch (color) {
      case 'blue':
        return {
          color: buttonColors.blue50,
          backgroundColor: 'white',
          borderColor: buttonColors.blue50,
          boxShadow: boxShadow.blue50,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.blue10,
            },
          },
        };
      case 'brown':
        return {
          color: buttonColors.brown50,
          backgroundColor: 'white',
          borderColor: buttonColors.brown50,
          boxShadow: boxShadow.brown50,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.brown10,
            },
          },
        };
      case 'gray':
      default:
        return {
          color: buttonColors.gray50,
          backgroundColor: 'white',
          borderColor: buttonColors.gray20,
          boxShadow: boxShadow.gray20,

          '&:not(:disabled)': {
            '&:hover': {
              backgroundColor: buttonColors.gray10,
            },
          },
        };
    }
  }),

  spinner && ((style) => ({
    position: 'relative',
    color: 'transparent',
    overflow: 'hidden',

    '& > *': {
      opacity: 0,
    },

    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: style.lineHeight,
      height: style.lineHeight,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundImage: `url(${Svg.renderToDataUri(<Spinner stroke={style.color} />)})`,
      transform: 'translate3d(-50%, -50%, 0)',
      animation: `${(
        keyframes({
          '0%': { transform: 'translate3d(-50%, -50%, 0) rotate(0deg)' },
          '8%': { transform: 'translate3d(-50%, -50%, 0) rotate(30deg)' },
          '17%': { transform: 'translate3d(-50%, -50%, 0) rotate(60deg)' },
          '25%': { transform: 'translate3d(-50%, -50%, 0) rotate(90deg)' },
          '33%': { transform: 'translate3d(-50%, -50%, 0) rotate(120deg)' },
          '42%': { transform: 'translate3d(-50%, -50%, 0) rotate(150deg)' },
          '50%': { transform: 'translate3d(-50%, -50%, 0) rotate(180deg)' },
          '58%': { transform: 'translate3d(-50%, -50%, 0) rotate(210deg)' },
          '67%': { transform: 'translate3d(-50%, -50%, 0) rotate(240deg)' },
          '75%': { transform: 'translate3d(-50%, -50%, 0) rotate(270deg)' },
          '83%': { transform: 'translate3d(-50%, -50%, 0) rotate(300deg)' },
          '92%': { transform: 'translate3d(-50%, -50%, 0) rotate(330deg)' },
          '100%': { transform: 'translate3d(-50%, -50%, 0) rotate(360deg)' },
        })
      )} 1s step-start forwards infinite`,
    },
  })),
);
