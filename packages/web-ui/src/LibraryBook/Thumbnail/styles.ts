import css from "@emotion/css";

export const thumbnail = css({
  maxWidth: 100,
  lineHeight: 0,
});

export const thumbnailWidth = (width: number) => css({
  width,
});

export const thumbnailImageWrapper = css({
  display: 'inline-block',
  position: 'relative',
  lineHeight: 0,
});
