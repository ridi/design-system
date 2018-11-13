### Basic Usage
```jsx
<Confirm
  title="Confirm Title"
  caution="Warning message."
  show={state.show}
  onConfirm={() => {
    // Do something.
  }}
  onCancel={() => {
    setState({ show: false });
  }}
>
  Confirm content.
</Confirm>
```
> See `Modal` for more details.
