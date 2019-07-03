import { PositionProperty } from 'csstype';
import { merge } from 'lodash';
import { resetLayout } from "../../styles";

const unReadDotSize = 6;
const unReadDotMarginBottom = 8;

export const unReadDot = merge({}, resetLayout, {
  position: 'absolute' as PositionProperty,
  left: 0,
  top: 0,
  width: unReadDotSize,
  height: unReadDotSize,
  borderRadius: unReadDotSize,
  fontSize: 0,
  overflow: 'hidden',
  color: '#339cf2',
  background: '#339cf2',
});

export const UnReadDotOutterHeight = unReadDotSize + unReadDotMarginBottom;