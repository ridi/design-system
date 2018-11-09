### Basic Usage
```jsx
const handleChange = (event) => {
  setState({
    value: event.target.value,
  });
};

<div>
  <Radio
    value="a"
    checked={state.value === 'a'}
    onChange={handleChange}
  >
    A
  </Radio>

  <Radio
    value="b"
    checked={state.value === 'b'}
    onChange={handleChange}
  >
    B
  </Radio>

  <Radio
    value="c"
    checked={state.value === 'c'}
    disabled
    onChange={handleChange}
  >
    C
  </Radio>
</div>
```

### With Group
```jsx
<Radio.Group
  value={state.value}
  onChange={(event) => {
    setState({ value: event.target.value });
  }}
>
  <Radio value="a">A</Radio>
  <Radio value="b">B</Radio>
  <Radio value="c">C</Radio>
</Radio.Group>
```
