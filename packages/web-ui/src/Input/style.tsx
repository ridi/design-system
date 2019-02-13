import colors from '@ridi/colors';
import { check, dotCircle } from '@ridi/web-icons';
import { merge } from 'lodash';
import * as React from 'react';
import { formElementDisabled, formElementFocus, formElementHover, resetAppearance, resetFont, resetLayout } from '../styles';
import { Svg } from '../Svg';

const borderWidth = 1;
const buttonSize = 18;

export default merge({},
  resetAppearance,
  resetFont,
  resetLayout,

  {
    boxSizing: 'border-box',
    display: 'inline-block',
    border: `${borderWidth}px solid ${colors.slateGray20}`,
    borderRadius: '3px',
    outline: 'none',
    background: 'white',
    color: colors.slateGray90,
    fontSize: '13px',
    fontWeight: 700,
    lineHeight: `${32 - 2 * borderWidth}px`,
    transition: 'color .2s, background .2s, border-color .2s, box-shadow .2s',

    padding: '0 .6em',

    '&[type=checkbox], &[type=radio]': {
      padding: 0,
      width: `${buttonSize}px`,
      lineHeight: `${buttonSize - 2 * borderWidth}px`,
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
          borderColor: colors.dodgerBlue60,
          background: colors.dodgerBlue50,
        },
      },

      '&:not(:disabled)': {
        cursor: 'pointer',
      },
    },

    '&[type=checkbox]': {
      '&::after': {
        maskImage: `url('${Svg.renderToDataUri(<Svg render={check} />)}')`,
        transform: 'scale(.625)',
      },
    },

    '&[type=radio]': {
      borderRadius: '50%',

      '&::after': {
        maskImage: `url(${Svg.renderToDataUri(<Svg render={dotCircle} />)})`,
        transform: 'scale(.5)',
      },
    },

    '&:hover': formElementHover,
    '&:focus': formElementFocus,
    '&:disabled': formElementDisabled,
  },
);
