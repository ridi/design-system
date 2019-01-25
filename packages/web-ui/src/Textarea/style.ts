import colors from '@ridi/colors';
import { merge } from 'lodash';
import { formElementDisabled, formElementFocus, formElementHover, resetAppearance, resetFont, resetLayout } from '../styles';

export default merge({},
  resetAppearance,
  resetFont,
  resetLayout,

  {
    boxSizing: 'border-box',
    display: 'inline-block',
    border: `1px solid ${colors.slateGray20}`,
    borderRadius: '3px',
    outline: 'none',
    background: 'white',
    color: colors.slateGray90,
    fontSize: '13px',
    fontWeight: 700,
    transition: 'color .2s, background .2s, border-color .2s, box-shadow .2s',

    padding: '.6em .8em',
    overflowY: 'auto',
    lineHeight: '1.6em',
    resize: 'vertical',

    '&:read-only, &:disabled': {
      resize: 'none',
    },

    '&:hover': formElementHover,
    '&:focus': formElementFocus,
    '&:disabled': formElementDisabled,
  },
);
