### Basic Usage
```jsx
const handleChange = (event) => {
  setState({ value: event.target.value });
};

<div>
  <Radio
    checked={state.value === 'apple'}
    value="apple"
    onChange={handleChange}
  >
    Apple
  </Radio>

  <Radio
    checked={state.value === 'banana'}
    value="banana"
    onChange={handleChange}
  >
    Banana
  </Radio>

  <Radio
    checked={state.value === 'cherry'}
    disabled
    value="cherry"
    onChange={handleChange}
  >
    Cherry
  </Radio>
</div>
```

### Using Label & Input Separately
```jsx
<Label disabled={state.disabled}>
  <Input
    type="radio"
    checked={state.value === 'radioValue'}
    disabled={state.disabled}
    value="radioValue"
    onChange={(event) => {
      setState({ value: event.target.value });
    }}
  />
  Radio
</Label>
```
> This example shows how to pass props for each component explicitly.
