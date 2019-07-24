import { merge } from 'lodash';
import { resetFont, resetLayout } from 'src/styles';

export const annotations = merge({}, resetLayout, {
  listStyle: 'none',
  whiteSpace: 'nowrap',
  fontSize: 0,
  marginTop: 8,
});

export const annotationItem = merge({}, resetFont, resetLayout, {
  display: 'inline-block',
  color: '#808991',
  fontSize: 12,
  marginLeft: 12,
});

export const annotationTitle = ({
  display: 'block',
  width: 0,
  height: 0,
  fontSize: 0,
  overflow: 'hidden',
  color: 'transparent',
});

const annotationIcon = {
  width: 12,
  height: 12,
  marginRight: 4,
  verticalAlign: 'top',
  fill: '#9ea7ad',
};

export const bookMarkIcon = merge({}, annotationIcon, {
  width: 9,
});

export const hightlightIcon = merge({}, annotationIcon, {
  width: 10,
});

export const memoIcon = merge({}, annotationIcon, {
  width: 12,
});
