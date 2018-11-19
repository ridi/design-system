### Basic Usage
```jsx
const handleClick = (event) => {
  setState({ value: event.target.value });
};

<Options>
  <Options.Item
    selected={state.value === 'apple'}
    value="apple"
    onClick={handleClick}
  >
    Apple
  </Options.Item>

  <Options.Item
    selected={state.value === 'banana'}
    value="banana"
    onClick={handleClick}
  >
    Banana
  </Options.Item>

  <Options.Item
    selected={state.value === 'cherry'}
    value="cherry"
    onClick={handleClick}
  >
    Cherry
  </Options.Item>
</Options>
```

### Using Anchor
```jsx
<Options>
  <Options.Item
    selected={state.value === 'apple'}
    render="a"
    href="#"
  >
    Apple
  </Options.Item>

  <Options.Item
    selected={state.value === 'banana'}
    render="a"
    href="#"
  >
    Banana
  </Options.Item>

  <Options.Item
    selected={state.value === 'cherry'}
    render="a"
    href="#"
  >
    Cherry
  </Options.Item>
</Options>
```
