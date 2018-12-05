import { css } from '@emotion/core';
import colors from '@ridi/colors';
import { formElementDisabled, formElementFocus, formElementHover, resetAppearance, resetFont, resetLayout } from '../styles';

const radioSize = 18;

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

    '&[type=radio]': {
      padding: 0,
      width: radioSize,
      height: radioSize,
      borderRadius: '50%',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',

      '&::after': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        width: '50%',
        height: '50%',
        borderRadius: '50%',
        background: 'currentColor',
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

    },

    '&:hover': formElementHover,
    '&:focus': formElementFocus,
    '&:disabled': formElementDisabled,
  },
);
