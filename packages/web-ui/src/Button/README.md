### Basic Usage
```jsx
import { Button } from '@ridi/web-ui';

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
import { Button } from '@ridi/web-ui';

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
import { Button } from '@ridi/web-ui';

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
import { Button } from '@ridi/web-ui';

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
import { Button } from '@ridi/web-ui';

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
import { Button } from '@ridi/web-ui';

<Button
  render={(props) => (
    <a {...props} />
  )}
  href="#button/example"
>
  Button
</Button>
```

#### Component as Prop
```jsx
import { Button } from '@ridi/web-ui';

const Anchor = (props) => (
  <a {...props} />
);

<Button render={Anchor} href="#button/example">
  Button
</Button>
```

#### Tag String as Prop
```jsx
import { Button } from '@ridi/web-ui';

<Button render="a" href="#button/example">
  Button
</Button>
```
