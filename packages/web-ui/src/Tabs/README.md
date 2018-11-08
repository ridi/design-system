### RSG
```jsx
const Values = {
  A: 'a',
  B: 'b',
  C: 'c',
  D: 'd',
};

initialState = {
  selectedValue: Values.A,
};

const handleClick = (event, value) => {
  setState({ selectedValue: value });
};

<Tabs>
  <Tab
    active={state.selectedValue === Values.A}
    value={Values.A}
    onClick={handleClick}
  >
    일반도서
  </Tab>
  <Tab
    active={state.selectedValue === Values.B}
    value={Values.B}
    onClick={handleClick}
  >
    로맨스
  </Tab>
  <Tab
    active={state.selectedValue === Values.C}
    value={Values.C}
    onClick={handleClick}
  >
    판타지 무협
  </Tab>
  <Tab
    active={state.selectedValue === Values.D}
    value={Values.D}
    onClick={handleClick}
  >
    만화
  </Tab>
</Tabs>
```

### With Group
```jsx
const Values = {
  A: 'a',
  B: 'b',
  C: 'c',
  D: 'd',
};

initialState = {
  selectedValue: Values.A,
};

const handleChange = (event, value) => {
  setState({ selectedValue: value });
};

<Tab.Group selectedValue={state.selectedValue} onChange={handleChange}>
  <Tab value={Values.A}>일반도서</Tab>
  <Tab value={Values.B}>로맨스</Tab>
  <Tab value={Values.C}>판타지 무협</Tab>
  <Tab value={Values.D}>만화</Tab>
</Tab.Group>
```
