### Basic Usage
```jsx
const handleClick = (event) => {
  alert('Button Clicked!');
};

<Button onClick={handleClick}>
  Button
</Button>
```

### Variations
```jsx
<div>
  <Button color="gray">Button</Button>
  <Button color="blue">Button</Button>
  <Button color="brown">Button</Button>
  <Button color="gray" disabled>Button</Button>
  <Button color="blue" disabled>Button</Button>
  <Button color="brown" disabled>Button</Button>
</div>
```

### Using `render` Prop

#### Function as Prop
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

#### Component as Prop
```jsx
const Anchor = ({ children, ...restProps }) => (
  <a {...restProps}>{children}</a>
);

<Button render={Anchor} href="#">
  Button
</Button>
```

#### Tag String as Prop
```jsx
<Button render="a" href="#">
  Button
</Button>
```
