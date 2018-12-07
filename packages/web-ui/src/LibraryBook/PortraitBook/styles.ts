import css from "@emotion/css";

export const portraitBook = css({
  maxWidth: 100,
});

export const thumbnail = css({
  position: 'relative',
  lineHeight: 0,
  width: '100%',
  height: 'auto',
  paddingBottom: '162%', // width : height = 1: 1.618
  '& .Thumbnail': {
    position: 'absolute',
    bottom: 0,
  },
});

export const metadata = css({
  marginTop: 5,
});
