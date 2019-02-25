import { TextAlignProperty } from "csstype";

export const landscapeBook = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px',
  fontSize: 0,
};

export const thumbnail = {
  flex: '0 1 0px',
  paddingRight: 16,
  alignSelf: 'flex-end',
};

export const metadata = {
  flex: '1 1 0px',
  padding: '10px 0',
};

export const buttons = {
  flex: '0 1 0px',
  textAlign: 'right' as TextAlignProperty,
  paddingLeft: 20,
};
