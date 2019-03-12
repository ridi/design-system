/** @jsx jsx */
import { jsx } from '@emotion/core';
import { checkboxCircle as CheckIcon } from '@ridi/web-icons';
import * as React from 'react';
import { ThumbnailChildrenSize } from '../Thumbnail';
import * as styles from './styles';

export interface ThumbnailCheckboxProps {
  checked: boolean;
  onChange: (e: React.SyntheticEvent<any>) => void;
  size?: ThumbnailChildrenSize;
}

export const ThumbnailCheckbox: React.FunctionComponent<ThumbnailCheckboxProps> = (props) => {
  const {
    checked,
    onChange,
    size,
  } = props;

  return (
    <label css={styles.checkbox}>
      <input
        css={styles.checkboxInput}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span css={styles.iconWrapper(size)}>
        <CheckIcon css={styles.checkboxIcon(checked)} />
      </span>
    </label>
  );
};
