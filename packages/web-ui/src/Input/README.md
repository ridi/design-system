### Basic Usage
```jsx
<Input
  type="text"
  name="inputName"
  value={state.value}
  disabled={false}
  placeholder="Enter Something."
  onChange={(event) => {
    setState({ value: event.target.value });
  }}
/>
```
