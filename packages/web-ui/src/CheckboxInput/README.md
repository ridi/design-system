### Basic Usage
```jsx
<CheckboxInput
  checked={state.checked}
  disabled={state.disabled}
  onChange={(event) => {
    setState({ checked: event.target.checked });
  }}
/>
```
> This component renders checkbox only as normal `input` tag does.
> To render checkbox with some text, please use `Checkbox` component or use this with `Label` component.
