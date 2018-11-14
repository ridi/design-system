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

### Using Sections
```jsx
<Modal
  show={state.show}
  onClose={() => {
    setState({ show: false });
  }}
>
  <Modal.Header>
    Modal header.
  </Modal.Header>

  <Modal.Body>
    Modal body.
  </Modal.Body>

  <Modal.Footer>
    Modal footer.
  </Modal.Footer>
</Modal>
```

### Implementing Alert
```jsx
const Alert = ({
  title,
  caution,
  children,
  onClose,
  ...restProps
}) => (
  <Modal onClose={onClose} {...restProps}>
    <Modal.Header>
      <h1>{title}</h1>
      <div>{caution}</div>
    </Modal.Header>

    <Modal.Body>
      {children}
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={onClose}>OK</Button>
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
  ...restProps
}) => (
  <Modal onClose={onCancel} {...restProps}>
    <Modal.Header>
      <h1>{title}</h1>
      <div>{caution}</div>
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
