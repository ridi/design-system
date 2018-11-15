### Basic Usage
```jsx
<RadioInput
  checked={state.checked}
  disabled={false}
  onChange={(event) => {
    setState({ checked: event.target.checked });
  }}
/>
```
> This component renders radio button only as normal `input` tag does.
> To render radio button with some text, please use `Radio` component or use this with `Label` component.
