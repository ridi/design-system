### Basic Usage
```jsx
<div>
  <div>
    <Label>
      Input: <Input placeholder="Enter something" />
    </Label>

    <Label disabled>
      Input: <Input value="This is disabled" disabled />
    </Label>
  </div>

  <div>
    <Label>
      <Input type="checkbox" /> Checkbox
    </Label>

    <Label active>
      <Input type="checkbox" defaultChecked /> Checkbox
    </Label>

    <Label disabled>
      <Input type="checkbox" disabled /> Checkbox
    </Label>

    <Label disabled>
      <Input type="checkbox" disabled defaultChecked /> Checkbox
    </Label>
  </div>

  <div>
    <Label>
      <Input name="labelExample1" type="radio" /> Radio
    </Label>

    <Label active>
      <Input name="labelExample1" type="radio" defaultChecked /> Radio
    </Label>

    <Label disabled>
      <Input name="labelExample2" type="radio" disabled /> Radio
    </Label>

    <Label disabled>
      <Input name="labelExample2" type="radio" disabled defaultChecked /> Radio
    </Label>
  </div>
</div>
```
