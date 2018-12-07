import css from "@emotion/css";
import { resetFont, resetLayout } from "../../styles";

export const readingProgressBar = css([resetLayout, {
  position: 'relative',
  lineHeight: 0,
  '.Thumbnail & ': {
    marginBottom: 8,
  },
}]);

export const title = css({
  display: 'block',
  fontSize: 0,
  width: 0,
  height: 0,
  overflow: 'hidden',
  color: 'transparent',
});

export const percentage = css([resetFont, {
  display: 'block',
  fontSize: 12,
  color: '#808991',
  lineHeight: '15px',
  marginBottom: 3,
  '.Thumbnail & ': {
    fontSize: 0,
    lineHeight: 0,
    marginBottom: 0,
    width: 0,
    height: 0,
    overflow: 'hidden',
    color: 'transparent',
  },
}]);

export const progressBG = css({
  display: 'inline-block',
  borderRadius: 4,
  background: '#d1d5d9',
  overflow: 'hidden',
  position: 'relative',
  width: 80,
  height: 4,
  '.Thumbnail & ': {
    width: '100%',
  },
});

export const progress = css({
  display: 'block',
  position: 'absolute',
  left: 0,
  top: 0,
  width: 0,
  height: '100%',
  borderRadius: 4,
  background: '#808991',
  color: '#808991',
});
