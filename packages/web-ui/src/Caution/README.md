### RSG
```jsx
<Caution
  title="카트에 저장된 책이 너무 많습니다."
  description="서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.\n최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다."
  icon="exclamation_2"
  theme="brown"
  isLayoutPotrait={false}
  isAlignCenter={false}    
  inlineLink={{
    component: Link,
    to: '/',
    label: '위시리스트로 이동',
  }}
  button={
    <Button
      color="brown"
      size="large"
    >
      위시리스트로 이동
    </Button>
  }
/>
```

### Proposal
```jsx
<Caution
  color="brown"
  layout="portrait"
  align="center"

  icon="exclamation_2"
  title="카트에 저장된 책이 너무 많습니다."
  description="서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.\n최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다."
  inlineLink={(
    <Caution.InlineLink render={Link} to="/">
      위시리스트로 이동
    </Caution.InlineLink>
  )}
  buttons={[
    <Caution.Button render="a" href="/">
      위시리스트로 이동
    </Caution.Button>,
  ]}
/>
```

```jsx
<Caution
  color="brown"
  layout="portrait"
  align="center"
>
  <Caution.Header>
    <Caution.Icon name="exclamation_2" /> 카트에 저장된 책이 너무 많습니다.
  </Caution.Header>

  <Caution.Body>
    서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.<br />
    최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다. <br />
    <Caution.InlineLink render={Link} to="/">
      위시리스트로 이동
    </Caution.InlineLink>
  </Caution.Body>

  <Caution.Footer>
    <Caution.Button render="a" href="/">
      위시리스트로 이동
    </Caution.Button>
  </Caution.Footer>
</Caution>
```