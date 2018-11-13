### Basic Usage
```jsx
<Panel>
  Panel content.
</Panel>
```

### Implementing Caution
```jsx
const Caution = ({
  iconName,
  title,
  description,
  inlineLink,
  buttons,
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
        {inlineLink}
      </div>
    </Panel.Body>

    <Panel.Footer>
      <Group>
        {buttons}
      </Group>
    </Panel.Footer>
  </Panel>
);

Caution.InlineLink = ({ className, children, ...restProps }) => (
  <Button className={classNames('inlineLinkClassName', className)} {...restProps}>
    {children}
    <Icon className="inlineLinkIconClassName" name='arrow_9_right' />
  </Button>
);

Caution.Button = ({ className, ...restProps }) => (
  <Button className={classNames('buttonClassName', className)} {...restProps} />
);
```
