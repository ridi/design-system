import classNames from 'classnames';
import * as React from 'react';
import CheckIcon from './svgs/check_5.svg';

export interface SelectProps {
  selectMode: boolean;
  selected: boolean;
  onSelected: (e: React.SyntheticEvent<any>) => void;
}

export const Checkbox: React.SFC<SelectProps> = (props) => {
  const {
    selectMode,
    selected,
    onSelected,
  } = props;

  return selectMode ? (
    <label className={classNames(['Checkbox', selected && 'active'])}>
      <input
        className="Checkbox_Input"
        type="checkbox"
        checked={selected}
        onClick={(e) => {onSelected(e); }}
      />
      <span className="Checkbox_IconWrapper">
        <CheckIcon className="Checkbox_Icon" />
      </span>
    </label>
  ) : null;
};
