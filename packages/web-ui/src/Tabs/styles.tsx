import colors from '@ridi/colors';
import { merge } from 'lodash';
import * as React from 'react';
import { resetAppearance, resetFont, resetLayout } from '../styles';
import { Tabs, TabsProps } from './index';

export const tabs = ({}: TabsProps) => merge({},
  resetLayout,

  {
    display: 'block',
    listStyle: 'none',
    borderBottom: `2px solid ${colors.slategray_20}`,
  },
);

export const itemWrapper = () => merge({},
  resetLayout,
  resetFont,

  {
    display: 'inline-block',

    '&:not(:first-child)': {
      marginLeft: '1em',
    },
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
    color: colors.slategray_50,
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '16px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color .2s',

    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: -2,
      left: 0,
      right: 0,
      height: 0,
      background: colors.slategray_20,
      transition: 'height .1s, background .1s',
    },
  },

  active && {
    color: colors.slategray_80,

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
            background: colors.dodgerblue_50,
          };
      }
    })(),
  },

  !active && {
    '&:active': {
      color: colors.slategray_70,
    },

    '&:hover': {
      color: colors.slategray_70,

      '&::before': (() => {
        switch (activeColor) {
          case 'black':
            return {
              height: 2,
              background: colors.slategray_50,
            };
          case 'blue':
            return {
              height: 3,
              background: colors.slategray_50,
            };
        }
      })(),
    },
  },
);
