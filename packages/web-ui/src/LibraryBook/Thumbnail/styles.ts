import { PositionProperty } from "csstype";

export const thumbnail = {
  maxWidth: 100,
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
