### Basic Usage
```jsx
const handleChange = (event) => {
  setState({
    value: event.target.value,
  });
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
<Radio.Label
  disabled={false}
>
  <Radio.Input
    name="radioName"
    value="radioValue"
    checked={state.checked}
    disabled={false}
    onChange={(event) => {
      setState({ checked: event.target.checked });
    }}
  />
  Radio
</Radio.Label>
```
> This example shows how to pass props for each component explicitly.
