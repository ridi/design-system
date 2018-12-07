import { css } from '@emotion/core';
import { resetFont, resetLayout } from '../../styles';

export const annotations = css([resetLayout, {
  listStyle: 'none',
  whiteSpace: 'nowrap',
  fontSize: 0,
  marginTop: 8,
}]);

export const annotationItem = css([resetFont, resetLayout, {
  display: 'inline-block',
  color: '#808991',
  fontSize: 12,
  marginLeft: 12,
}]);

export const annotationTitle = css({
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

export const bookMarkIcon = css([annotationIcon, {
  width: 9,
}]);

export const hightlightIcon = css([annotationIcon, {
  width: 10,
}]);

export const memoIcon = css([annotationIcon, {
  width: 12,
}]);
