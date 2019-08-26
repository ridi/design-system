import { lineClamp, resetFont, resetLayout } from "src/styles";

const titleLineClamp = lineClamp();
export const title = {
  ...titleLineClamp,
  ...resetFont,
  ...resetLayout,
  color: '#212529',
  fontSize: 15,
  fontWeight: 700,
  lineHeight: '1.31em',
  '.PortraitBook & ': {
    fontSize: 13,
  },
};
