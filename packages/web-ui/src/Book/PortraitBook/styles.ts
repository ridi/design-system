import { PositionProperty } from "csstype";

export const portraitBook = {
  maxWidth: 100,
};

export const thumbnail = {
  position: 'relative' as PositionProperty,
  lineHeight: 0,
  width: '100%',
  height: 'auto',
  paddingBottom: '162%', // width : height = 1: 1.618
  '& .Thumbnail': {
    position: 'absolute' as PositionProperty,
    bottom: 0,
  },
};

export const metadata = {
  marginTop: 5,
};
