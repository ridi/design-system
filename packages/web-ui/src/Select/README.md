### Basic Usage
```jsx
<Select
  value={state.value}
  onChange={(event) => {
    setState({ value: event.target.value });
  }}
>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <optgroup label="Sub Option">
    <option value="4">Sub Option 1</option>
    <option value="5">Sub Option 2</option>
    <option value="6">Sub Option 3</option>
  </optgroup>
</Select>
```
