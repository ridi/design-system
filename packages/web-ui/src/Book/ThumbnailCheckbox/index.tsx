/** @jsx jsx */
import { jsx } from '@emotion/core';
import { checkboxCircle as CheckIcon } from '@ridi/web-icons';
import * as React from 'react';
import * as styles from './styles';

export interface ThumbnailCheckboxProps {
  checked: boolean;
  onChange: (e: React.SyntheticEvent<any>) => void;
}

export const ThumbnailCheckbox: React.FunctionComponent<ThumbnailCheckboxProps> = (props) => {
  const {
    checked,
    onChange,
  } = props;

  return (
    <label css={styles.checkbox}>
      <input
        css={styles.checkboxInput}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span css={styles.iconWrapper}>
        <CheckIcon css={styles.checkboxIcon(checked)} />
      </span>
    </label>
  );
};
