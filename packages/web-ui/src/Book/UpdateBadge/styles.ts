import { merge } from 'lodash';
import { resetFont } from "../../styles";

export const updateBadge = merge({}, resetFont, {
  position: 'absolute',
  left: 0,
  top: 0,
  margin: 0,
  padding: '4px 0 5px 0',
  width: 24,
  textAlign: 'center',
  fontSize: 9,
  fontWeight: 400,
  lineHeight: '1em',
  color: 'white',
  background: 'rgba(33, 37, 41, 0.9)',
  borderBottomRightRadius: 4,
});
