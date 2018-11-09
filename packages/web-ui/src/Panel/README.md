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
    <h1 className={titleClassName}>
      <Icon className="titleIconClassName" name={iconName} />
      {title}
    <h1>

    <div className="descriptionClassName">
      {description}
    </div>

    <div className="inlineLinkContainerClassName">
      {inlineLink}
    </div>

    <Group className="buttonGroupClassName">
      {buttons}
    </Group>
  </Panel>
);

Caution.InlineLink = ({ className, children, ...restProps }) => (
  <Button
    className={classNames('inlineLinkClassName', className)}
    {...restProps}
  >
    {children}
    <Icon
      className='inlineLinkIconClassName'
      name='inlineLinkIconName'
    />
  </Button>
);

Caution.Button = ({ className, ...restProps }) => (
  <Button
    className={classNames('buttonClassName', className)}
    {...restProps}
  />
);
```
