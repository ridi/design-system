import { lineClamp, resetFont, resetLayout } from 'src/styles';

const authorLineClamp = lineClamp(1);
export const author = {
  ...resetFont,
  ...resetLayout,
  ...authorLineClamp,
  lineHeight: '1.4em',
  marginTop: 4,
  color: '#808991',
  fontSize: 12,
};
