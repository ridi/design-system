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
