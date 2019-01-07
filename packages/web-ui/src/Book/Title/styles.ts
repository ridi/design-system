import { merge } from 'lodash';
import { lineClamp, resetFont, resetLayout } from "../../styles";

export const title = merge({}, lineClamp(), resetFont, resetLayout, {
  color: '#212529',
  fontSize: 15,
  fontWeight: 'bold',
  lineHeight: '1.31em',
  '.PortraitBook & ': {
    fontSize: 13,
  },
});
