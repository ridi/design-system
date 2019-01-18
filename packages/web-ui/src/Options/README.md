### Basic Usage
```jsx
initialState = { value: 'apple' };

const handleClick = (event) => {
  setState({ value: event.target.value });
};

<Options>
  <Options.Item
    active={state.value === 'apple'}
    value="apple"
    onClick={handleClick}
  >
    Apple
  </Options.Item>

  <Options.Item
    active={state.value === 'banana'}
    value="banana"
    onClick={handleClick}
  >
    Banana
  </Options.Item>

  <Options.Item
    active={state.value === 'cherry'}
    value="cherry"
    onClick={handleClick}
  >
    Cherry
  </Options.Item>
</Options>
```

### Dot Separator
```jsx
initialState = { value: 'apple' };

const handleClick = (event) => {
  setState({ value: event.target.value });
};

<Options separator="dot">
  <Options.Item
    active={state.value === 'apple'}
    value="apple"
    onClick={handleClick}
  >
    Apple
  </Options.Item>

  <Options.Item
    active={state.value === 'banana'}
    value="banana"
    onClick={handleClick}
  >
    Banana
  </Options.Item>

  <Options.Item
    active={state.value === 'cherry'}
    value="cherry"
    onClick={handleClick}
  >
    Cherry
  </Options.Item>
</Options>
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
      <Options>
        <Options.Item
          render="a"
          href="#options/apple"
          active={this.state.hash === '#options/apple'}
        >
          Apple
        </Options.Item>

        <Options.Item
          render="a"
          href="#options/banana"
          active={this.state.hash === '#options/banana'}
        >
          Banana
        </Options.Item>

        <Options.Item
          render="a"
          href="#options/cherry"
          active={this.state.hash === '#options/cherry'}
        >
          Cherry
        </Options.Item>
      </Options>
    );
  }
}

<Example />
```
