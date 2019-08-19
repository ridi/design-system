import { PositionProperty } from 'csstype';
import { resetLayout } from "src/styles";

const UNREAD_DOT_SIZE = 6;
const UNREAD_DOT_MARGIN_BOTTOM = 8;

export const unreadDot = {
  ...resetLayout,
  position: 'absolute' as PositionProperty,
  left: 0,
  top: 0,
  width: UNREAD_DOT_SIZE,
  height: UNREAD_DOT_SIZE,
  borderRadius: UNREAD_DOT_SIZE,
  fontSize: 0,
  overflow: 'hidden',
  color: '#339cf2',
  background: '#339cf2',
};

export const UnreadDotOutterHeight = UNREAD_DOT_SIZE + UNREAD_DOT_MARGIN_BOTTOM;