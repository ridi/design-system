import { PositionProperty, TextAlignProperty } from 'csstype';
import { resetFont } from "src/styles";

export const updateBadge = {
  ...resetFont,
  position: 'absolute' as PositionProperty,
  left: 0,
  top: 0,
  margin: 0,
  padding: '4px 0',
  width: 24,
  textAlign: 'center' as TextAlignProperty,
  background: 'rgba(33, 37, 41, 0.9)',
  borderBottomRightRadius: 4,
};

export const updateIcon = {
  display: 'inline-block',
  width: 15,
  height: 9,
  fill: 'white',
};
