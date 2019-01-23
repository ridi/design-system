import { PositionProperty } from "csstype";

export const thumbnail = {
  maxWidth: 110,
  lineHeight: 0,
};

export const thumbnailWidth = (width: number) => ({
  width,
});

export const thumbnailImageWrapper = {
  display: 'inline-block',
  position: 'relative' as PositionProperty,
  lineHeight: 0,
};

export const thumbnailLink = {
  position: 'absolute' as PositionProperty,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 150,
  'a, button': {
    display: 'block',
    position: 'absolute' as PositionProperty,
    width: '100%',
    height: '100%',
    background: 'transprent',
    lineHeight: '0',
    fontSize: 0,
    color: 'transparent',
    border: '0',
    boxShadow: 'none',
    outline: 'none',
  },
};
