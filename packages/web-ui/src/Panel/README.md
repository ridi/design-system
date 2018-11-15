### Basic Usage
```jsx
<Panel>
  Panel content.
</Panel>
```

### Using Sections
```jsx
<Panel>
  <Panel.Header>
    Panel header.
  </Panel.Header>

  <Panel.Body>
    Panel body.
  </Panel.Body>

  <Panel.Footer>
    Panel footer.
  </Panel.Footer>
</Panel>
```

### Implementing Caution
```jsx
const Caution = ({
  iconName,
  title,
  description,
  textLink,
  button,
  ...restProps
}) => (
  <Panel {...restProps}>
    <Panel.Header>
      <h1>
        <Icon name={iconName} /> {title}
      </h1>
    </Panel.Header>

    <Panel.Body>
      <p>
        {description}
      </p>
      <div>
        {textLink}
      </div>
    </Panel.Body>

    <Panel.Footer>
      {button}
    </Panel.Footer>
  </Panel>
);

Caution.TextLink = ({ className, children, ...restProps }) => (
  <Button className={classNames('textLinkClassName', className)} {...restProps}>
    {children}
    <Icon className="textLinkIconClassName" name='arrow_9_right' />
  </Button>
);

Caution.Button = ({ className, ...restProps }) => (
  <Button className={classNames('buttonClassName', className)} {...restProps} />
);
```
