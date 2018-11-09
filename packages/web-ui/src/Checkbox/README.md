### Basic Usage
```jsx
<Checkbox
  name="checkboxName"
  value="checkboxValue"
  checked={state.checked}
  disabled={false}
  onChange={(event) => {
    setState({ checked: event.target.checked });
  }}
>
  Checkbox
</Checkbox>
```

### Without Internal `label`
```jsx
const CheckboxLabel = ({
  name,
  value,
  checked,
  disabled,
  children,
  onChange,
  ...restProps
}) => (
  <Label {...restProps}>
    <Checkbox
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    {children}
  </Label>
);
```

```jsx
const CheckboxLabel = ({
  checkboxProps,
  children,
  ...restProps
}) => (
  <Label {...restProps}>
    <Checkbox {...checkboxProps}/>
    {children}
  </Label>
);
```

```jsx
const CheckboxLabel = ({
  name,
  value,
  checked,
  disabled,
  children,
  onChange,
  renderCheckbox: CustomCheckbox = Checkbox
  ...restProps
}) => (
  <Label {...restProps}>
    <CustomCheckbox
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    {children}
  </Label>
);
```
