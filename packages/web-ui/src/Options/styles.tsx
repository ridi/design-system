import colors from '@ridi/colors';
import { dot1, dot2 } from '@ridi/web-icons';
import { merge } from 'lodash';
import * as React from 'react';
import { resetAppearance, resetFont, resetLayout } from '../styles';
import { Svg } from '../Svg';
import { Options, OptionsProps } from './index';

const getSeparatorStyle = (separator: OptionsProps['separator']) => merge(
  {
    display: 'inline-block',
    width: 16,
    height: 12,

    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    verticalAlign: 'middle',

    content: '""',
  },

  (() => {
    switch (separator) {
      case 'dot':
        return {
          backgroundSize: '3px',
          backgroundImage: `url(${Svg.renderToDataUri(<Svg render={dot1} fill={colors.slateGray20} />)})`,
        };
      case 'pipe':
      default:
        return {
          backgroundSize: '1px 100%',
          backgroundImage: `url(${Svg.renderToDataUri(<Svg render={dot2} fill={colors.slateGray10} preserveAspectRatio="none" />)})`,
        };
    }
  })(),
);

export const options = ({}: OptionsProps) => merge({},
  resetLayout,

  {
    display: 'inline-block',
    listStyle: 'none',
  },
);

export const itemWrapper = ({ separator }: OptionsProps) => merge({},
  resetLayout,

  {
    display: 'inline-block',

    ':not(:first-of-type)::before': getSeparatorStyle(separator),
  },
);

export const item = ({ active }: Options.ItemProps) => merge({},
  resetAppearance,
  resetLayout,
  resetFont,

  {
    display: 'inline-block',

    color: colors.slateGray50,

    fontSize: 12,
    fontWeight: 700,
    textDecoration: 'none',

    cursor: 'pointer',
    outline: 'none',
    transition: 'color .2s',
  },

  active && {
    color: colors.slateGray90,
  },

  !active && {
    '&:focus, &:active': {
      color: colors.slateGray70,
    },

    '&:hover': {
      color: colors.slateGray70,
    },
  },
);
