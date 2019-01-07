import { merge } from 'lodash';
import { resetFont } from "../../styles";

export const updateBadge = merge({}, resetFont, {
  position: 'absolute',
  left: 0,
  top: 0,
  margin: 0,
  padding: 5,
  fontSize: 8,
  fontWeight: 700,
  lineHeight: '1em',
  color: 'white',
  background: 'rgba(0, 119, 217, .95)',
  borderBottomRightRadius: 4,
});
