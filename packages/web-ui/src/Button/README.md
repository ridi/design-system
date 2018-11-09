#### Simple Implementation
```jsx
const Button = ({ 
  render = 'button',
  children,
  ...props
}) => {
  const Component = render;

  return (
    <Component {...props}>
      {children}
    </Component>
  );
};
```

### Basic Usage
```jsx
const handleClick = event => {
  // Do something.
};

<Button onClick={handleClick}>
  Button
</Button>
```

#### Function as Prop
```jsx
<Button
  render={({ children, ...props }) => (
    <a {...props}>{children}</a>
  )}
  href="#"
>
  Button
</Button>
```

#### Component as Prop
```jsx
const Anchor = ({ children, ...props }) => (
  <a {...props}>{children}</a>
);

<Button render={Anchor} href="#">
  Button
</Button>
```

#### Tag string as Prop
```jsx
<Button render="a" href="#">
  Button
</Button>
```
