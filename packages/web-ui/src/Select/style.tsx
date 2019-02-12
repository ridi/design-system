import colors from '@ridi/colors';
import { arrow1Down } from '@ridi/web-icons';
import { merge } from 'lodash';
import * as React from 'react';
import { formElementDisabled, formElementFocus, formElementHover, resetAppearance, resetFont, resetLayout } from '../styles';
import { Svg, SvgProps } from '../Svg';
import { SelectProps } from './index';

const ArrowIcon = (props: SvgProps) => (
  <Svg render={arrow1Down} {...props} />
);

export default ({ outline }: SelectProps) => merge({},
  resetAppearance,
  resetFont,
  resetLayout,

  {
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',

    boxSizing: 'border-box',
    padding: 0,
    paddingRight: '1.7em',
    borderWidth: 0,
    outline: 'none',
    background: 'white',
    color: colors.slateGray70,
    lineHeight: '32px',
    fontSize: '13px',
    fontWeight: 700,
    touchAction: 'manipulation',
    transition: 'color .2s, border-color .2s, box-shadow .2s',

    backgroundPosition: 'right 7px center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '10px 6px',
    backgroundImage: `url(${Svg.renderToDataUri(<ArrowIcon fill={colors.slateGray50} />)})`,

    '&::-ms-expand': {
      display: 'none',
    },

    '&:not(:disabled)': {
      '&:hover, &:active': {
        ...formElementHover,
        color: colors.slateGray90,
      },
    },

    '&:disabled': {
      color: colors.slateGray40,
      backgroundImage: `url(${Svg.renderToDataUri(<ArrowIcon fill={colors.slateGray20} />)})`,
      cursor: 'not-allowed',
    },
  },

  outline && {
    padding: '0 .6em',
    paddingRight: '1.7em',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.slateGray20,
    borderRadius: 3,
    lineHeight: '30px',

    '&:not(:disabled)': {
      '&:focus': formElementFocus,
    },

    '&:disabled': formElementDisabled,
  },
);
