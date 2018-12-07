import { css } from "@emotion/core";
import { lineClamp, resetFont, resetLayout } from '../../styles';

export const author = css([resetFont, resetLayout, lineClamp(2), {
  lineHeight: '1.4em',
  marginTop: 4,
  color: '#808991',
  fontSize: 12,
}]);
