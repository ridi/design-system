### Basic Usage
```jsx
<TextArea
  name="textAreaName"
  value={state.value}
  disabled={false}
  placeholder="Enter Something."
  onChange={(event) => {
    setState({ value: event.target.value });
  }}
/>
```
