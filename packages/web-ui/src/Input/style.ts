import { css } from '@emotion/core';
import colors from '@ridi/colors';
import { check_1, dot_1 } from '@ridi/web-icons';
import { formElementDisabled, formElementFocus, formElementHover, resetAppearance, resetFont, resetLayout } from '../styles';

const buttonSize = 18;

export default css(
  resetAppearance,
  resetFont,
  resetLayout,
  {
    boxSizing: 'border-box',
    display: 'inline-block',
    border: `1px solid ${colors.slategray_20}`,
    borderRadius: '3px',
    outline: 'none',
    background: 'white',
    color: colors.slategray_90,
    fontSize: '13px',
    fontWeight: 700,
    transition: 'color .2s, background .2s, border-color .2s, box-shadow .2s',

    padding: '.6em',
    lineHeight: '1em',

    '&[type=checkbox], &[type=radio]': {
      padding: 0,
      width: buttonSize,
      height: buttonSize,
      color: 'white',

      '&::after': {
        content: '""',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        background: 'currentColor',
        mask: 'center no-repeat',
        maskSize: 'contain',
      },

      '&:not(:checked)': {
        color: 'transparent',
      },

      '&:checked': {
        '&:not(:disabled)': {
          borderColor: colors.dodgerblue_60,
          background: colors.dodgerblue_50,
        },
      },

      '&:not(:disabled)': {
        cursor: 'pointer',
      },
    },

    '&[type=checkbox]': {
      '&::after': {
        maskImage: `url(${check_1})`,
        transform: 'scale(.64)',
      },
    },

    '&[type=radio]': {
      borderRadius: '50%',

      '&::after': {
        maskImage: `url(${dot_1})`,
        transform: 'scale(.5)',
      },
    },

    '&:hover': formElementHover,
    '&:focus': formElementFocus,
    '&:disabled': formElementDisabled,
  },
);
