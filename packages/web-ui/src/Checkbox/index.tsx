import * as React from 'react';
import { BaseProps } from '../Base';
import { Input } from '../Input';
import { Label } from '../Label';

export interface CheckboxProps extends BaseProps {
  /**
   * Checked state.
   */
  checked?: boolean;

  /**
   * Disabled state.
   */
  disabled?: boolean;

  /**
   * `name` for `input`.
   */
  name?: string;

  /**
   * `value` for `input`.
   */
  value?: string;

  /**
   * `onChange` event handler for `input`.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  checked,
  children,
  disabled,
  name,
  value,
  onChange,
  ...restProps
}) => (
  <Label
    active={checked}
    disabled={disabled}
    {...restProps}
  >
    <Input
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    /> {children}
  </Label>
);
