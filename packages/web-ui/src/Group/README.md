### Basic Usage
```jsx
import { Button, Group } from '@ridi/web-ui';

<Group>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
</Group>
```

```jsx
import { Input, Group } from '@ridi/web-ui';

<Group>
  <Input placeholder="Enter something" />
  <Input placeholder="Enter something" />
  <Input placeholder="Enter something" />
</Group>
```

```jsx
import { Button, Input, Select, Group } from '@ridi/web-ui';

<Group>
  <Select outline>
    <Select.Option>Option</Select.Option>
  </Select>
  <Input placeholder="Enter something" />
  <Button>Button</Button>
</Group>
```

### Vertical Orientation
```jsx
import { Button, Input, Select, Group } from '@ridi/web-ui';

<Group orientation="vertical">
  <Select outline>
    <Select.Option>Option</Select.Option>
  </Select>
  <Input placeholder="Enter something" />
  <Button>Button</Button>
</Group>
```
