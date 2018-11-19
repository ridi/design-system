### Basic Usage
```jsx
<Select
  value={state.value}
  onChange={(event) => {
    setState({ value: event.target.value });
  }}
>
  <Select.Option value="1">Option 1</Select.Option>
  <Select.Option value="2">Option 2</Select.Option>
  <Select.Option value="3">Option 3</Select.Option>
  <Select.OptionGroup label="Sub Option">
    <Select.Option value="4">Sub Option 1</Select.Option>
    <Select.Option value="5">Sub Option 2</Select.Option>
    <Select.Option value="6">Sub Option 3</Select.Option>
  </Select.OptionGroup>
</Select>
```
