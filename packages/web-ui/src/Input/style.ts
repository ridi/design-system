import { css } from '@emotion/core';
import colors from '@ridi/colors';
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
        maskImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M47.4 6.7c.4-.6.6-1.4.6-2.2C48 2 45.8 0 43.1 0c-1.6 0-2.9.7-3.8 1.8-.2.3-.5.6-.6 1L18.1 35.1 8.9 24.9c-.9-1.2-2.6-2.6-4.7-2.6-3 0-4.2 2.7-4.2 5.1 0 1.3.7 2.3 1.5 3.2l12.6 15.6c.8.9 2.2 1.8 4 1.8 2 0 3.2-.7 4-1.8l25-38.9.3-.6z"/></svg>')`,
        transform: 'scale(.64)',
      },
    },

    '&[type=radio]': {
      borderRadius: '50%',

      '&::after': {
        maskImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" /></svg>')`,
        transform: 'scale(.5)',
      },
    },

    '&:hover': formElementHover,
    '&:focus': formElementFocus,
    '&:disabled': formElementDisabled,
  },
);
