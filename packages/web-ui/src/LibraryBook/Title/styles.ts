import css from "@emotion/css";
import { lineClamp, resetFont, resetLayout } from "../../styles";

export const title = css([lineClamp(), resetFont, resetLayout, {
  color: '#212529',
  fontSize: 15,
  fontWeight: 'bold',
  lineHeight: '1.31em',
  '.PortraitBook & ': {
    fontSize: 13,
  },
}]);

