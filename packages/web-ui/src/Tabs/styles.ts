import colors from '@ridi/colors';
import { merge } from 'lodash';
import { resetAppearance, resetFont, resetLayout } from '../styles';
import { Tabs, TabsProps } from './index';

export const tabs = ({ stretchItems }: TabsProps) => merge({},
  resetLayout,

  {
    display: 'block',
    listStyle: 'none',
    borderBottom: `2px solid ${colors.slateGray20}`,
  },

  stretchItems && {
    display: 'flex',
  },
);

export const itemWrapper = ({ stretchItems }: TabsProps) => merge({},
  resetLayout,

  {
    display: 'inline-block',
    marginLeft: 16,

    '&:first-of-type': {
      marginLeft: 0,
    },
  },

  stretchItems && {
    flex: '1 0 auto',
    marginLeft: 0,
  },
);

export const item = ({ active, activeColor }: Tabs.ItemProps) => merge({},
  resetAppearance,
  resetLayout,
  resetFont,

  {
    display: 'block',
    position: 'relative',
    padding: '8px 0',
    width: '100%',
    color: colors.slateGray50,
    fontSize: 15,
    fontWeight: 700,
    lineHeight: '16px',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: 'color .2s',

    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: -2,
      left: 0,
      right: 0,
      height: 0,
      background: colors.slateGray20,
      transition: 'height .1s, background .1s',
    },
  },

  active && {
    color: colors.slateGray80,

    '&::before': (() => {
      switch (activeColor) {
        case 'black':
          return {
            height: 2,
            background: 'black',
          };
        case 'blue':
          return {
            height: 3,
            background: colors.dodgerBlue50,
          };
      }
    })(),
  },

  !active && {
    '&:focus, &:active': {
      color: colors.slateGray70,
    },

    '&:hover': {
      color: colors.slateGray70,

      '&::before': (() => {
        switch (activeColor) {
          case 'black':
            return {
              height: 2,
              background: colors.slateGray50,
            };
          case 'blue':
            return {
              height: 3,
              background: colors.slateGray50,
            };
        }
      })(),
    },
  },
);
