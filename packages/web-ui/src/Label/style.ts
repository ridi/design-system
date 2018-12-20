import colors from '@ridi/colors';
import { LabelProps } from '.';
import { mergeStyles, resetAppearance, resetFont, resetLayout } from '../styles';

export default ({ active, disabled }: LabelProps) => mergeStyles(
  resetAppearance,
  resetFont,
  resetLayout,

  {
    display: 'inline-block',
    fontSize: '13px',
    color: colors.slategray_60,
    transition: 'color .2s',
    WebkitTapHighlightColor: 'transparent',
  },

  !disabled && {
    cursor: 'pointer',

    '&:hover, &:active': {
      color: colors.slategray_90,
    },
  },

  !disabled && active && {
    color: colors.slategray_90,
  },

  disabled && {
    color: colors.slategray_20,
  },
);
