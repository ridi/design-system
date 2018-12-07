import css from "@emotion/css";

export const landscapeBook = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px',
  fontSize: 0,
});

export const thumbnail = css({
  flex: '0 1 0',
  paddingRight: 16,
  alignSelf: 'flex-end',
});

export const metadata = css({
  flex: '1 1 0',
  padding: '10px 0',
});

export const buttons = css({
  flex: '0 1 0',
  textAlign: 'right',
  paddingLeft: 20,
});
