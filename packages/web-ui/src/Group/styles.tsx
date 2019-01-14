import { merge } from 'lodash';
import * as React from 'react';
import { GroupProps } from '.';
import { resetLayout } from '../styles';

const borderRadius = 4;

export const group = ({ orientation }: GroupProps) => merge({},
  resetLayout,

  {
    display: 'inline-block',
    listStyle: 'none',
  },

  (() => {
    switch (orientation) {
      case 'vertical':
        return {};
      case 'horizontal':
        return {
          whiteSpace: 'nowrap',
        };
    }
  })(),
);

export const itemWrapper = ({ orientation }: GroupProps) => merge({},
  resetLayout,

  {
    '& > *': {
      position: 'relative',
      zIndex: 0,

      ':not(:disabled)': {
        ':hover': {
          zIndex: 1,
        },

        ':focus, :active': {
          zIndex: 2,
        },
      },
    },
  },

  (() => {
    switch (orientation) {
      case 'vertical':
        return {
          display: 'block',

          '& > *': {
            display: 'block',
            width: '100%',
            margin: 0,
            borderRadius: 0,
          },

          ':not(:first-of-type) > *': {
            marginTop: -1,
          },

          ':first-of-type > *': {
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
          },

          ':last-of-type > *': {
            borderBottomLeftRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
          },

        };
      case 'horizontal':
        return {
          display: 'inline-block',

          '& > *': {
            display: 'inline-block',
            margin: 0,
            borderRadius: 0,
          },

          ':not(:first-of-type) > *': {
            marginLeft: -1,
          },

          ':first-of-type > *': {
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
          },

          ':last-of-type > *': {
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
          },
        };
    }
  })(),
);
