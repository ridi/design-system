### Basic Usage
```jsx
const handleClick = (event) => {
  setState({ value: event.target.value });
};

<Tabs>
  <Tabs.Item
    selected={state.value === 'apple'}
    value="apple"
    onClick={handleClick}
  >
    Apple
  </Tabs.Item>

  <Tabs.Item
    selected={state.value === 'banana'}
    value="banana"
    onClick={handleClick}
  >
    Banana
  </Tabs.Item>

  <Tabs.Item
    selected={state.value === 'cherry'}
    value="cherry"
    onClick={handleClick}
  >
    Cherry
  </Tabs.Item>
</Tabs>
```

### Using Anchor
```jsx
<Tabs>
  <Tabs.Item
    selected={state.value === 'apple'}
    render="a"
    href="#"
  >
    Apple
  </Tabs.Item>

  <Tabs.Item
    selected={state.value === 'banana'}
    render="a"
    href="#"
  >
    Banana
  </Tabs.Item>

  <Tabs.Item
    selected={state.value === 'cherry'}
    render="a"
    href="#"
  >
    Cherry
  </Tabs.Item>
</Tabs>
```
