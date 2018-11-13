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

### Using Label & Input Separately
```jsx
<Checkbox.Label
  disabled={false}
>
  <Checkbox.Input
    name="checkboxName"
    value="checkboxValue"
    checked={state.checked}
    disabled={false}
    onChange={(event) => {
      setState({ checked: event.target.checked });
    }}
  />
  Checkbox
</Checkbox.Label>
```
> This example shows how to pass props for each component explicitly.
