### Basic Usage
```jsx
import { Checkbox } from '@ridi/web-ui';

initialState = { checked: false };

<div>
  <Checkbox
    checked={state.checked}
    onChange={(event) => {
      setState({ checked: event.target.checked });
    }}
  >
    Checkbox
  </Checkbox>
  
  <Checkbox
    checked={state.checked}
    disabled
  >
    Checkbox
  </Checkbox>
</div>
```
> If you want more control over `input`,
> please consider using [`Label`](#label) and [`Input`](#input) directly.
