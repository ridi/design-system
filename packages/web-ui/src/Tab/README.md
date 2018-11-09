### Basic Usage
```jsx
const handleClick = (event, value) => {
  setState({ value });
};

<div>
  <Tab
    selected={state.value === 'a'}
    value="a"
    onClick={handleClick}
  >
    일반도서
  </Tab>
  <Tab
    selected={state.value === 'b'}
    value="b"
    onClick={handleClick}
  >
    로맨스
  </Tab>
  <Tab
    selected={state.value === 'c'}
    value="c"
    onClick={handleClick}
  >
    판타지 무협
  </Tab>
  <Tab
    selected={state.value === 'd'}
    value="d"
    onClick={handleClick}
  >
    만화
  </Tab>
</div>
```

### With Group
```jsx
<Tab.Group
  value={state.value}
  onChange={(event, value) => {
    setState({ value });
  }}
>
  <Tab value="a">일반도서</Tab>
  <Tab value="b">로맨스</Tab>
  <Tab value="c">판타지 무협</Tab>
  <Tab value="d">만화</Tab>
</Tab.Group>
```
