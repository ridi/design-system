import { merge } from 'lodash';
import { resetLayout } from "../../styles";

export const unReadDot = merge({}, resetLayout, {
  width: 6,
  height: 6,
  borderRadius: 6,
  fontSize: 0,
  overflow: 'hidden',
  color: '#339cf2',
  background: '#339cf2',
  marginBottom: 8,
});
