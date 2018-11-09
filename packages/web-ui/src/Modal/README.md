### Basic Usage
```jsx
<Modal
  show={state.show}
  onClose={() => {
    setState({ show: false });
  }}
>
  Modal content.
</Modal>
```

### Implementing Alert
```jsx
const Alert = ({
  title,
  caution,
  children,
  onClose,
  ...restProps,
}) => (
  <Modal {...restProps}>
    <Modal.Header>
      <h1 className={titleClassName}>{title}</h1>
      <div className={confirmClassName}>{caution}</div>
    </Modal.Header>

    <Modal.Body>
      {children}
    </Modal.Body>

    <Modal.Footer>
      <Button className={okButtonClassName} onClick={onClose}>OK</Button>
    </Modal.Footer>
  </Modal>
);
```

### Implementing Confirm
```jsx
const Confirm = ({
  title,
  caution,
  children,
  onConfirm,
  onCancel,
  ...restProps,
}) => (
  <Modal onClose={onCancel} {...restProps}>
    <Modal.Header>
      <h1 className={titleClassName}>{title}</h1>
      <div className={confirmClassName}>{caution}</div>
    </Modal.Header>

    <Modal.Body>
      {children}
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={onCancel}>Cancel</Button>
      <Button onClick={onConfirm}>Confirm</Button>
    </Modal.Footer>
  </Modal>
);
```
