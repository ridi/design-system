import { merge } from 'lodash';
import { lineClamp, resetFont, resetLayout } from '../../styles';

export const author = merge({}, resetFont, resetLayout, lineClamp(2), {
  lineHeight: '1.4em',
  marginTop: 4,
  color: '#808991',
  fontSize: 12,
});
