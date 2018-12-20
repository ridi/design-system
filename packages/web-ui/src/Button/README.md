### Basic Usage
```jsx
const handleClick = (event) => {
  alert('Clicked!');
};

<div>
  <Button onClick={handleClick} color="gray">Button</Button>
  <Button onClick={handleClick} color="blue">Button</Button>
  <Button onClick={handleClick} color="brown">Button</Button>
  <Button onClick={handleClick} color="gray" disabled>Button</Button>
  <Button onClick={handleClick} color="blue" disabled>Button</Button>
  <Button onClick={handleClick} color="brown" disabled>Button</Button>
</div>
```

### Outline
```jsx
<div>
  <Button outline color="gray">Button</Button>
  <Button outline color="blue">Button</Button>
  <Button outline color="brown">Button</Button>
  <Button outline color="gray" disabled>Button</Button>
  <Button outline color="blue" disabled>Button</Button>
  <Button outline color="brown" disabled>Button</Button>
</div>
```

### Thick Border
```jsx
<div>
  <Button thickBorder color="gray">Button</Button>
  <Button thickBorder color="blue">Button</Button>
  <Button thickBorder color="brown">Button</Button>
  <Button thickBorder color="gray" disabled>Button</Button>
  <Button thickBorder color="blue" disabled>Button</Button>
  <Button thickBorder color="brown" disabled>Button</Button>
</div>
```

### Spinner
```jsx
<div>
  <Button spinner color="gray">Button</Button>
  <Button spinner color="blue">Button</Button>
  <Button spinner color="brown">Button</Button>
  <Button spinner color="gray" disabled>Button</Button>
  <Button spinner color="blue" disabled>Button</Button>
  <Button spinner color="brown" disabled>Button</Button>
</div>
```

### Sizes
```jsx
<div>
  <div>
    <Button size="small" color="gray">Button</Button>
    <Button size="small" color="blue">Button</Button>
    <Button size="small" color="brown">Button</Button>
    <Button size="small" color="gray" disabled>Button</Button>
    <Button size="small" color="blue" disabled>Button</Button>
    <Button size="small" color="brown" disabled>Button</Button>
  </div>
  <div>
    <Button size="medium" color="gray">Button</Button>
    <Button size="medium" color="blue">Button</Button>
    <Button size="medium" color="brown">Button</Button>
    <Button size="medium" color="gray" disabled>Button</Button>
    <Button size="medium" color="blue" disabled>Button</Button>
    <Button size="medium" color="brown" disabled>Button</Button>
  </div>
  <div>
    <Button size="large" color="gray">Button</Button>
    <Button size="large" color="blue">Button</Button>
    <Button size="large" color="brown">Button</Button>
    <Button size="large" color="gray" disabled>Button</Button>
    <Button size="large" color="blue" disabled>Button</Button>
    <Button size="large" color="brown" disabled>Button</Button>
  </div>
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
