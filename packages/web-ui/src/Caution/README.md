### Basic Usage
```jsx
<Caution
  iconName="exclamation_2"
  title="카트에 저장된 책이 너무 많습니다."
  description="서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.\n최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다."
  textLink={(
    <Caution.TextLink render={Link} to="#">
      위시리스트로 이동
    </Caution.TextLink>
  )}
  button={(
    <Caution.Button render="a" href="#">
      위시리스트로 이동
    </Caution.Button>
  )}
/>
```

### Passing Elements as Props
```jsx
<Caution
  iconName="exclamation_2"
  title={<h1>카트에 저장된 책이 너무 많습니다.</h1>}
  description={(
    <p>
      서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.<br />
      최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다.<br />

      <Caution.TextLink render={Link} to="#">
        위시리스트로 이동
      </Caution.TextLink>
    </p>
  )}
  button={(
    <Caution.Button render="a" href="#">
      위시리스트로 이동
    </Caution.Button>
  )}
/>
```

> See `Panel` for more details.
