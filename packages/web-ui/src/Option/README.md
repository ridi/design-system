### Basic Usage
```jsx
<Option.Group
  value={state.value}
  onChange={(event) => {
    setState({ value: event.target.value });
  }}
>
  <Option value="1">Option 1</Option>
  <Option value="2">Option 2</Option>
  <Option value="3">Option 3</Option>
</Option.Group>
```
