```jsx
<div>
  <Button>Button</Button>
  <Button disabled>Button</Button>
</div>
```

### Basic Usage
```jsx
const handleClick = (event) => {
  // Do something.
};

<Button onClick={handleClick}>
  Button
</Button>
```

### Function as Prop
```jsx
<Button
  render={({ children, ...restProps }) => (
    <a {...restProps}>{children}</a>
  )}
  href="#"
>
  Button
</Button>
```

### Component as Prop
```jsx
const Anchor = ({ children, ...restProps }) => (
  <a {...restProps}>{children}</a>
);

<Button render={Anchor} href="#">
  Button
</Button>
```

### Tag String as Prop
```jsx
<Button render="a" href="#">
  Button
</Button>
```
