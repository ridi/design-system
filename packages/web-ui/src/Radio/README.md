### Basic Usage
```jsx
import { Radio } from '@ridi/web-ui';

initialState = { value: 'apple' };

const handleChange = (event) => {
  setState({ value: event.target.value });
};

<div>
  <Radio
    checked={state.value === 'apple'}
    value="apple"
    onChange={handleChange}
  >
    Apple
  </Radio>

  <Radio
    checked={state.value === 'banana'}
    value="banana"
    onChange={handleChange}
  >
    Banana
  </Radio>

  <Radio
    checked={state.value === 'cherry'}
    disabled
    value="cherry"
    onChange={handleChange}
  >
    Cherry
  </Radio>
</div>
```
> If you want more control over `input`,
> please consider using [`Label`](#label) and [`Input`](#input) directly.
