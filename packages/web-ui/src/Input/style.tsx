import colors from '@ridi/colors';
import { check_1, dot_1 } from '@ridi/web-icons';
import { BoxSizingProperty } from 'csstype';
import * as React from 'react';
import { formElementDisabled, formElementFocus, formElementHover, resetAppearance, resetFont, resetLayout } from '../styles';
import { Svg } from '../Svg';

const borderWidth = 1;
const buttonSize = 18;

export default Object.assign({},
  resetAppearance,
  resetFont,
  resetLayout,

  {
    boxSizing: 'border-box' as BoxSizingProperty,
    display: 'inline-block',
    border: `${borderWidth}px solid ${colors.slategray_20}`,
    borderRadius: '3px',
    outline: 'none',
    background: 'white',
    color: colors.slategray_90,
    fontSize: '13px',
    fontWeight: 700,
    transition: 'color .2s, background .2s, border-color .2s, box-shadow .2s',

    padding: '.6em',

    '&[type=checkbox], &[type=radio]': {
      padding: 0,
      width: `${buttonSize}px`,
      lineHeight: `${buttonSize - borderWidth * 2}px`,
      color: 'white',

      '&::after': {
        content: '"\\00a0"',
        display: 'block',
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
        maskImage: `url('${Svg.renderToDataUri(<Svg render={check_1} />)}')`,
        transform: 'scale(.625)',
      },
    },

    '&[type=radio]': {
      borderRadius: '50%',

      '&::after': {
        maskImage: `url(${Svg.renderToDataUri(<Svg render={dot_1} />)})`,
        transform: 'scale(.5)',
      },
    },

    '&:hover': formElementHover,
    '&:focus': formElementFocus,
    '&:disabled': formElementDisabled,
  },
);
