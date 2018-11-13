### Basic Usage
```jsx
<Alert
  title="Alert Title"
  caution="Warning message."
  show={state.show}
  onClose={() => {
    setState({ show: false });
  }}
>
  Alert content.
</Alert>
```
> See `Modal` for more details.
