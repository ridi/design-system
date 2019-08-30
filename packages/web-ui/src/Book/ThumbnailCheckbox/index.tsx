/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import CheckIcon from 'src/icons/CheckboxCircle.svg';
import { ThumbnailChildrenSize } from '../Thumbnail';
import * as styles from './styles';

export interface ThumbnailCheckboxProps {
  checked: boolean;
  onChange: (e: React.SyntheticEvent<any>) => void;
  series: boolean;
  size?: ThumbnailChildrenSize;
}

export const ThumbnailCheckbox: React.FunctionComponent<ThumbnailCheckboxProps> = (props) => {
  const {
    checked,
    onChange,
    size,
    series,
  } = props;

  return (
    <label css={styles.checkbox}>
      <input
        css={styles.checkboxInput}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span css={styles.iconWrapper(size, series)}>
        <CheckIcon css={styles.checkboxIcon(checked)} />
      </span>
    </label>
  );
};
