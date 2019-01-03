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

### Active Color
```jsx
initialState = { value: 'apple' };

const handleClick = (event) => {
  setState({ value: event.target.value });
};

<Tabs activeColor="blue">
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

### Stretch Items
```jsx
initialState = { value: 'apple' };

const handleClick = (event) => {
  setState({ value: event.target.value });
};

<Tabs stretchItems>
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
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleHashChange = this.handleHashChange.bind(this);
    this.state = { hash: window.location.hash };
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.handleHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  handleHashChange() {
    this.setState({ hash: window.location.hash });
  };

  render() {
    return (
      <Tabs>
        <Tabs.Item
          render="a"
          href="#tabs/apple"
          active={this.state.hash === '#tabs/apple'}
        >
          Apple
        </Tabs.Item>

        <Tabs.Item
          render="a"
          href="#tabs/banana"
          active={this.state.hash === '#tabs/banana'}
        >
          Banana
        </Tabs.Item>

        <Tabs.Item
          render="a"
          href="#tabs/cherry"
          active={this.state.hash === '#tabs/cherry'}
        >
          Cherry
        </Tabs.Item>
      </Tabs>
    );
  }
}

<Example />
```
