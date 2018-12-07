### Basic Usage
```jsx
<Textarea
  name="textareaName"
  value={state.value}
  disabled={false}
  placeholder="Enter Something."
  onChange={(event) => {
    setState({ value: event.target.value });
  }}
/>
```
