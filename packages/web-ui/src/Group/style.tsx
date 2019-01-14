import { merge } from 'lodash';
import * as React from 'react';
import { GroupProps } from '.';

const borderRadius = 4;

export default ({ orientation }: GroupProps) => merge(
  {
    display: 'inline-block',

    '& > *': {
      position: 'relative',
      zIndex: 0,

      '&:not(:disabled)': {
        '&:hover': {
          zIndex: 1,
        },

        '&:focus, &:active': {
          zIndex: 2,
        },
      },
    },
  },

  (() => {
    switch (orientation) {
      case 'vertical':
        return {
          '& > *': {
            display: 'block',
            width: '100%',
            margin: 0,
            borderRadius: 0,

            '&:not(:first-child)': {
              marginTop: -1,
            },

            '&:first-child': {
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
            },

            '&:last-child': {
              borderBottomLeftRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
            },
          },
        };
      case 'horizontal':
        return {
          whiteSpace: 'nowrap',

          '& > *': {
            display: 'inline-block',
            margin: 0,
            borderRadius: 0,

            '&:not(:first-child)': {
              marginLeft: -1,
            },

            '&:first-child': {
              borderTopLeftRadius: borderRadius,
              borderBottomLeftRadius: borderRadius,
            },

            '&:last-child': {
              borderTopRightRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
            },
          },
        };
    }
  })(),
);
