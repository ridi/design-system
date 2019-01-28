### Basic Usage
```jsx
import { Input } from '@ridi/web-ui';

<div>
  <Input placeholder="Enter Something" />
  <Input value="This is read only" readOnly />
  <Input value="This is disabled" disabled />
</div>
```

### `type="checkbox"`
```jsx
import { Input } from '@ridi/web-ui';

<div>
  <Input type="checkbox" />
  <Input type="checkbox" defaultChecked />
  <Input type="checkbox" disabled />
  <Input type="checkbox" disabled defaultChecked />
</div>
```
> Consider using [`Checkbox`](#checkbox) for convenience.

### `type="radio"`
```jsx
import { Input } from '@ridi/web-ui';

<div>
  <Input name="inputExample1" type="radio" />
  <Input name="inputExample1" type="radio" defaultChecked />
  <Input name="inputExample2" type="radio" disabled />
  <Input name="inputExample2" type="radio" disabled defaultChecked />
</div>
```
> Consider using [`Radio`](#radio) for convenience.
