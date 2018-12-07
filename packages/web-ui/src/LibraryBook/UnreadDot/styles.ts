import css from "@emotion/css";
import { resetLayout } from "../../styles";

export const unReadDot = css([resetLayout, {
  width: 6,
  height: 6,
  borderRadius: 6,
  fontSize: 0,
  overflow: 'hidden',
  color: '#339cf2',
  background: '#339cf2',
  marginBottom: 8,
}]);
