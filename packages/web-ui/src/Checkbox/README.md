### Basic Usage
```jsx
<Checkbox
  checked={state.checked}
  disabled={state.disabled}
  onChange={(event) => {
    setState({ checked: event.target.checked });
  }}
>
  Checkbox
</Checkbox>
```

### Using Label & Input Separately
```jsx
<Label disabled={state.disabled}>
  <Input
    type="checkbox"
    checked={state.checked}
    disabled={state.disabled}
    onChange={(event) => {
      setState({ checked: event.target.checked });
    }}
  />
  Checkbox
</Label>
```
> This example shows how to pass props for each component explicitly.
