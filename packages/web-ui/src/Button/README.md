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

### Loading Icon
```jsx
<div>
  <Button loading color="gray">Button</Button>
  <Button loading color="blue">Button</Button>
  <Button loading color="brown">Button</Button>
  <Button loading color="gray" outline>Button</Button>
  <Button loading color="blue" outline>Button</Button>
  <Button loading color="brown" outline>Button</Button>
</div>
```

### Sizes
```jsx
<div>
  <Button size="small">Button</Button>
  <Button size="medium">Button</Button>
  <Button size="large">Button</Button>
  <Button size="small" loading>Button</Button>
  <Button size="medium" loading>Button</Button>
  <Button size="large" loading>Button</Button>
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
