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

### Using Render Props (with static Components)
```jsx
<Caution
  color="brown"  
  renderTitle={props => (
    <Caution.Title {...props}>
      <Icon name="exclamation_2" />
      카트에 저장된 책이 너무 많습니다.
    </Caution.Title>
  )}
  renderDescription={props => (
    <Caution.Description {...props}>
      서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.<br />
      최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다.
    </Caution.Description>
  )}
  renderInlineLink={props => (
    <Caution.InlineLink
      {...props}
      render={Link}
      to="/"
    >
      위시리스트로 이동
      <Icon name="arrow_9_right" />
    </Caution.InlineLink>
  )}
  renderButton={props => (
    <Caution.Button {...props}>
      위시리스트로 이동
    </Caution.Button>
  )}
/>
```

### Using Render Props (without static Components)
```jsx
<Caution
  color="brown"  
  renderTitle={props => (
    <h1 {...props}>
      <Icon name="exclamation_2" />
      카트에 저장된 책이 너무 많습니다.
    </h1>
  )}
  renderDescription={props => (
    <p {...props}>
      서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.<br />
      최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다.
    </p>
  )}
  renderInlineLink={props => (
    <Link
      {...props}
      to="/"
    >
      위시리스트로 이동
      <Icon name="arrow_9_right" />
    </Link>
  )}
  renderButton={props => (
    <Button {...props}>
      위시리스트로 이동
    </Button>
  )}
/>
```

### Using Children (with static Components)
```jsx
<Caution
  color="brown" 
>
  <Caution.Title>
    <Icon name="exclamation_2" />
    카트에 저장된 책이 너무 많습니다.
  </Caution.Title>

  <Caution.Description>
    서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.<br />
    최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다.<br />

    <Caution.InlineLink
      render={Link}
      to="/"
    >
      위시리스트로 이동
      <Icon name="arrow_9_right" />
    </Caution.InlineLink>
  </Caution.Description>

  <Caution.Button>
    위시리스트로 이동
  </Caution.Button>
</Caution>
```

### Using Children (without static Components)
```jsx
<Caution
  className="MyCaution"
  color="brown"
>
  <h1 className="MyCaution_Title">
    <Icon 
      className="MyCaution_TitleIcon" 
      name="exclamation_2" 
    />
    카트에 저장된 책이 너무 많습니다.
  </h1>

  <p className="MyCaution_Description">
    서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.<br />
    최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다.<br />

    <Link
      className="MyCaution_InlineLink"
      to="/"
    >
      위시리스트로 이동
      <Icon 
        className="MyCaution_InlineLinkIcon"
        name="arrow_9_right"
      />
    </Link>
  </p>

  <Button className="MyCaution_Button">
    위시리스트로 이동
  </Button>
</Caution>
```
