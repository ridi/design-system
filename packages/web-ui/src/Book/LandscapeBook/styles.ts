import { TextAlignProperty } from "csstype";

export const landscapeBook = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px',
  fontSize: 0,
};

export const thumbnail = {
  flex: '0 0 auto',
  paddingRight: 16,
  alignSelf: 'flex-end',
};

export const metadata = {
  flex: 'auto',
  padding: '10px 0',
  fontSize: 13,
};

export const buttons = {
  flex: '0 0 auto',
  textAlign: 'right' as TextAlignProperty,
  paddingLeft: 20,
};
