### RSG (Basic Usage)
```jsx
<Popup
  title="팝업 제목"
  onCancel={() => this.setState({ popupStatus: false })}
  onConfirm={() => alert('Confirmed')}
  caution="위험합니다."
  active={this.state.popupStatus}
>
  팝업 내용입니다.
</Popup>
```

### RSG (With Tabs)
```jsx
<Popup
  title="팝업 제목"
  caution="위험합니다."
  tabs={[
    {
      name: '1번 탭',
      content: <h1>1번 탭의 내용입니다</h1>,
    },
    {
      name: '2번 탭',
      content: <h1>2번 탭의 내용입니다</h1>,
    },
  ]}
  active={this.state.popupStatus}
  activeTabIndex={0}
  onTabClick={(idx) => alert(idx)}
  onCancel={() => this.setState({ popupStatus: false })}
  onConfirm={() => alert('Confirmed')}
/>
```
