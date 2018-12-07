import css from "@emotion/css";

export const thumbnailImage = css({
  display: 'inline-block',
  position: 'relative',
  lineHeight: 0,
  '&::after': {
    display: 'block',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(
      to right,
      rgba(0, 0, 0, .2) 0,
      rgba(0, 0, 0, 0) 5%,
      rgba(0, 0, 0, 0) 95%,
      rgba(0, 0, 0, .2) 100%
    )`,
    border: 'solid 1px rgba(0, 0, 0, .1)',
    content: `''`,
  },
});

export const image = css({
  width: '100%',
});
