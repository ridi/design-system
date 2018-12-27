### Basic Usage
```jsx
initialState = { value: 'apple' };

const handleClick = (event) => {
  setState({ value: event.target.value });
};

<Tabs>
  <Tabs.Item
    active={state.value === 'apple'}
    value="apple"
    onClick={handleClick}
  >
    Apple
  </Tabs.Item>

  <Tabs.Item
    active={state.value === 'banana'}
    value="banana"
    onClick={handleClick}
  >
    Banana
  </Tabs.Item>

  <Tabs.Item
    active={state.value === 'cherry'}
    value="cherry"
    onClick={handleClick}
  >
    Cherry
  </Tabs.Item>
</Tabs>
```

### Using Anchor
```jsx
initialState = { value: 'apple' };

<Tabs>
  <Tabs.Item
    active={state.value === 'apple'}
    render="a"
    href="#"
  >
    Apple
  </Tabs.Item>

  <Tabs.Item
    active={state.value === 'banana'}
    render="a"
    href="#"
  >
    Banana
  </Tabs.Item>

  <Tabs.Item
    active={state.value === 'cherry'}
    render="a"
    href="#"
  >
    Cherry
  </Tabs.Item>
</Tabs>
```
