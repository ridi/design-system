import css from "@emotion/css";
import { resetAppearance, resetFont, resetLayout } from "../../styles";

export const unitBookCount = css([resetAppearance, resetFont, resetLayout, {
  display: 'inline-block',
  position: 'relative',
  textDecoration: 'none',
  '.Thumbnail & ': {
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
}]);

export const count = css({
  display: 'block',
  padding: '3px 15px 4px 7px',
  border: '1px solid #9ea7ad',
  height: '1em',
  lineHeight: '1em',
  fontSize: 11,
  fontWeight: 600,
  color: '#525a61',
  borderRadius: 50,
  background: 'white',
  whiteSpace: 'nowrap',
  '.Thumbnail & ': {
    position: 'absolute',
    left: '50%',
    bottom: 10,
    transform: 'translate3d(-50%, 0, 0)',
    borderColor: 'white',
    fontWeight: 700,
    color: 'white',
    background: 'rgba(0, 0, 0, .7)',
    boxShadow: '0 0 0 1px rgba(0, 0, 0, .7)',
  },
});

export const icon = css({
  position: 'absolute',
  right: 7,
  top: '50%',
  transform: 'translate3d(0, -50%, 0)',
  width: 5,
  height: 5,
  fill: '#636c73',
  '.Thumbnail & ': {
    fill: 'white',
  },
});
