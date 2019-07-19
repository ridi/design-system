import { merge } from 'lodash';
import { lineClamp, resetFont, resetLayout } from 'src/styles';

export const author = merge({}, resetFont, resetLayout, lineClamp(1), {
  lineHeight: '1.4em',
  marginTop: 4,
  color: '#808991',
  fontSize: 12,
});
