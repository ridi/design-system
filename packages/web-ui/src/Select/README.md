### Basic Usage
```jsx
initialState = { value: 1 };

const handleChange = (event) => {
  setState({ value: event.target.value });
};

<div>
  <Select value={state.value} onChange={handleChange}>
    <Select.Option value="1">Option 1</Select.Option>
    <Select.Option value="2">Option 2</Select.Option>
    <Select.Option value="3">Option 3</Select.Option>

    <Select.OptionGroup label="Sub Option">
      <Select.Option value="4">Sub Option 1</Select.Option>
      <Select.Option value="5">Sub Option 2</Select.Option>
      <Select.Option value="6">Sub Option 3</Select.Option>
    </Select.OptionGroup>
  </Select>

  <Select value={state.value} onChange={handleChange} disabled>
    <Select.Option value="1">Option 1</Select.Option>
    <Select.Option value="2">Option 2</Select.Option>
    <Select.Option value="3">Option 3</Select.Option>

    <Select.OptionGroup label="Sub Option">
      <Select.Option value="4">Sub Option 1</Select.Option>
      <Select.Option value="5">Sub Option 2</Select.Option>
      <Select.Option value="6">Sub Option 3</Select.Option>
    </Select.OptionGroup>
  </Select>
</div>
```

### Outline
```jsx
initialState = { value: 1 };

const handleChange = (event) => {
  setState({ value: event.target.value });
};

<div>
  <Select value={state.value} onChange={handleChange} outline>
    <Select.Option value="1">Option 1</Select.Option>
    <Select.Option value="2">Option 2</Select.Option>
    <Select.Option value="3">Option 3</Select.Option>

    <Select.OptionGroup label="Sub Option">
      <Select.Option value="4">Sub Option 1</Select.Option>
      <Select.Option value="5">Sub Option 2</Select.Option>
      <Select.Option value="6">Sub Option 3</Select.Option>
    </Select.OptionGroup>
  </Select>

  <Select value={state.value} onChange={handleChange} outline disabled>
    <Select.Option value="1">Option 1</Select.Option>
    <Select.Option value="2">Option 2</Select.Option>
    <Select.Option value="3">Option 3</Select.Option>

    <Select.OptionGroup label="Sub Option">
      <Select.Option value="4">Sub Option 1</Select.Option>
      <Select.Option value="5">Sub Option 2</Select.Option>
      <Select.Option value="6">Sub Option 3</Select.Option>
    </Select.OptionGroup>
  </Select>
</div>
```
